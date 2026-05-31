const topicInput = document.getElementById('topicInput');
const countInput = document.getElementById('countInput');
const generateBtn = document.getElementById('generateBtn');
const questionsContainer = document.getElementById('questionsContainer');

// AI 设置相关 DOM
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const apiKeyInput = document.getElementById('apiKeyInput');
const baseUrlInput = document.getElementById('baseUrlInput');
const modelInput = document.getElementById('modelInput');

let questions = [];
let usedQuestionIds = new Set(); // 记录已使用过的题目ID

// 读取 AI 配置
function getAiConfig() {
    return {
        apiKey: localStorage.getItem('ai_api_key') || 'f8f6d0752519adff511f15f9a1b684c7:MzVlOTZjYTBlZjM5MDMxNWE5MDY3NzJh',
        baseUrl: localStorage.getItem('ai_base_url') || 'https://spark-api-open.xf-yun.com/v1',
        model: localStorage.getItem('ai_model') || 'generalv3.5'
    };
}

// 初始化 AI 设置弹窗
function initSettings() {
    const config = getAiConfig();
    apiKeyInput.value = config.apiKey;
    baseUrlInput.value = config.baseUrl;
    modelInput.value = config.model;

    settingsBtn.addEventListener('click', () => {
        settingsModal.style.display = 'flex';
    });

    closeSettings.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            settingsModal.style.display = 'none';
        }
    });

    saveSettingsBtn.addEventListener('click', () => {
        localStorage.setItem('ai_api_key', apiKeyInput.value.trim());
        localStorage.setItem('ai_base_url', baseUrlInput.value.trim());
        localStorage.setItem('ai_model', modelInput.value.trim());
        settingsModal.style.display = 'none';
        alert('设置已保存！');
    });
}

// 防止双击缩放
document.addEventListener('dblclick', (e) => {
    e.preventDefault();
}, { passive: false });

// 显示错误提示
function showError(message) {
    questionsContainer.innerHTML = `
        <div class="empty-state">
            <h2>⚠️ ${message}</h2>
            <p>请确保题库数据加载正确</p>
        </div>
    `;
}

// 生成题目
async function generateQuestions() {
    const topic = topicInput.value.trim() || '随机微积分知识点';
    const count = Math.min(Math.max(parseInt(countInput.value) || 1, 1), 10);
    countInput.value = count;
    
    const config = getAiConfig();
    if (!config.apiKey) {
        showError('请先点击右上角 "⚙️ AI 设置" 配置 API Key');
        settingsModal.style.display = 'flex';
        return;
    }
    
    // 添加加载状态
    generateBtn.disabled = true;
    generateBtn.textContent = '⏳ 正在请求 AI 联网生成中...';
    
    try {
        const prompt = `你是一个只输出 JSON 的 API 接口。请生成 ${count} 道关于【${topic}】的大学微积分单项选择题。
你的回复必须是一个纯 JSON 数组，不能包含任何 markdown 语法（不要使用 \`\`\`json 等标记），不要输出任何除 JSON 数组以外的解释性文字。

JSON 数组中每个对象必须且只能包含以下全英文键名：
[
  {
    "id": "随机唯一字符串",
    "topic": "${topic}",
    "question": "题目描述（数学公式用 LaTeX 格式，行内用 $...$，独立用 $$...$$）",
    "answer": "正确答案",
    "distractors": ["错误答案1", "错误答案2", "错误答案3"],
    "solution": "详细的解题步骤和知识点解析"
  }
]`;

        const response = await fetch(`${config.baseUrl.replace(/\/+$/, '')}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model || 'generalv3.5',
                messages: [{ role: 'user', content: prompt }]
            })
        });

        if (!response.ok) {
            let errorMsg = `API 请求失败: ${response.status} ${response.statusText}`;
            try {
                const errData = await response.json();
                if (errData.error && errData.error.message) {
                    errorMsg = errData.error.message;
                } else if (errData.error) {
                    errorMsg = JSON.stringify(errData.error);
                }
            } catch(e) {}
            throw new Error(errorMsg);
        }

        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error.message || JSON.stringify(data.error));
        }
        
        let content = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content.trim() : '';
        if (!content) {
            throw new Error('AI 返回内容为空或格式异常');
        }
        
        // 尝试解析 JSON，如果带有 markdown 代码块则去除
        if (content.startsWith('```json')) {
            content = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (content.startsWith('```')) {
            content = content.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }

        // 提取 JSON 数组或对象部分，防止 AI 输出多余的文字
        // 匹配最外层的 [] 或 {}
        const jsonMatch = content.match(/\[[\s\S]*\]|\{[\s\S]*\}/);
        if (jsonMatch) {
            content = jsonMatch[0];
        }

        let aiQuestions;
        try {
            // 在解析之前，替换掉可能引起 JSON.parse 失败的特殊字符
            // 特别是换行符和未转义的反斜杠（常见于 LaTeX 公式中）
            // 因为 AI 有时会输出原生的 \n 或未正确转义的 LaTeX，如 \frac 而不是 \\frac
            const sanitizeContent = content
                .replace(/[\u0000-\u001F]+/g, '') // 移除控制字符，包括实际的换行符
                .replace(/\\(?!["\\/bfnrt])/g, '\\\\'); // 转义那些没有被转义的反斜杠
                
            aiQuestions = JSON.parse(sanitizeContent);
            
            // 兼容各种可能的返回格式
            if (!Array.isArray(aiQuestions)) {
                if (aiQuestions.questions && Array.isArray(aiQuestions.questions)) {
                    aiQuestions = aiQuestions.questions;
                } else if (aiQuestions.data && Array.isArray(aiQuestions.data)) {
                    aiQuestions = aiQuestions.data;
                } else {
                    // 如果就是一个单独的题目对象
                    aiQuestions = [aiQuestions];
                }
            }
        } catch (e) {
            console.error('JSON 解析失败，原始文本:', content);
            console.error('解析错误详情:', e);
            throw new Error(`AI 返回的数据格式无法解析。请重试或更换模型。`);
        }
        
        if (aiQuestions.length === 0) {
            throw new Error('AI 没有返回任何题目');
        }

        // 处理生成的题目
        questions = aiQuestions.map((q, i) => {
            const qQuestion = q.question || q["题目"] || q["题干"] || "题目生成异常，请重试";
            const qAnswer = q.answer || q["答案"] || q["正确答案"] || "答案生成异常";
            const qSolution = q.solution || q["解析"] || q["详细解析"] || "解析生成异常";
            const qDistractors = q.distractors || q["干扰项"] || q["错误答案"] || [];

            // 将正确的答案和干扰项组合成选项
            let options = [{ text: String(qAnswer), isCorrect: true }];
            if (Array.isArray(qDistractors) && qDistractors.length > 0) {
                qDistractors.slice(0, 3).forEach(d => {
                    options.push({ text: String(d), isCorrect: false });
                });
            } else {
                // fallback
                options.push({ text: "干扰项A", isCorrect: false });
                options.push({ text: "干扰项B", isCorrect: false });
                options.push({ text: "干扰项C", isCorrect: false });
            }
            
            // 打乱选项
            for (let j = options.length - 1; j > 0; j--) {
                const k = Math.floor(Math.random() * (j + 1));
                [options[j], options[k]] = [options[k], options[j]];
            }
            
            return { 
                id: q.id || `ai-${Date.now()}-${i}`,
                topic: q.topic || topic,
                question: String(qQuestion),
                answer: String(qAnswer),
                solution: String(qSolution),
                options, 
                hasAnswered: false 
            };
        });
        
        displayQuestions();
        
        // 滚动到题目区域
        questionsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
        console.error('生成题目失败:', error);
        showError(`联网生成失败：${error.message}`);
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = '✨ 联网生成题目';
    }
}

// 显示题目
function displayQuestions() {
    if (questions.length === 0) {
        questionsContainer.innerHTML = `
            <div class="empty-state">
                <h2>📚 开始练习吧！</h2>
                <p>选择知识点并生成题目</p>
            </div>
        `;
        return;
    }
    
    questionsContainer.innerHTML = questions.map((q, index) => `
        <div class="question-card" id="question-card-${index}">
            <div class="question-header">
                <span class="topic-tag">${q.topic}</span>
                <span>第 ${index + 1} 题</span>
            </div>
            <div class="question-text">${q.question.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            
            <div class="options-container" id="options-${index}">
                ${q.options.map((opt, optIndex) => `
                    <button class="option-btn" id="btn-${index}-${optIndex}" onclick="selectOption(${index}, ${optIndex})">
                        <span class="option-label">${String.fromCharCode(65 + optIndex)}</span>
                        <span class="option-content">${opt.text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
                    </button>
                `).join('')}
            </div>
            
            <div id="feedback-${index}" class="feedback-msg"></div>

            <button class="btn btn-secondary" id="toggle-btn-${index}" onclick="toggleAnswer(${index})" style="display: none;">
                📖 查看解析
            </button>
            <div id="answer-${index}" class="answer-section" style="display: none;">
                <div class="answer-box">
                    <div class="answer-label">✓ 正确答案</div>
                    <div class="answer-content">${q.answer.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                    <div class="solution-content">
                        <strong>💡 解析：</strong><br>${q.solution.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // 调用 MathJax 渲染公式
    const renderMath = () => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([questionsContainer]).catch((err) => console.log('MathJax 渲染错误:', err.message));
        } else {
            // 如果 MathJax 还未完全加载，等待一小段时间后重试
            setTimeout(renderMath, 200);
        }
    };
    renderMath();
}

// 选择选项
window.selectOption = function(qIndex, optIndex) {
    const q = questions[qIndex];
    if (q.hasAnswered) return; // 已经回答过则不能再选
    
    q.hasAnswered = true;
    const selectedOption = q.options[optIndex];
    const isCorrect = selectedOption.isCorrect;
    
    // 更新按钮状态
    q.options.forEach((opt, idx) => {
        const btn = document.getElementById(`btn-${qIndex}-${idx}`);
        btn.disabled = true; // 禁用所有选项
        
        if (opt.isCorrect) {
            btn.classList.add('correct');
        } else if (idx === optIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // 显示反馈信息
    const feedbackEl = document.getElementById(`feedback-${qIndex}`);
    if (isCorrect) {
        feedbackEl.textContent = '🎉 回答正确！';
        feedbackEl.className = 'feedback-msg success';
    } else {
        feedbackEl.textContent = '❌ 回答错误。';
        feedbackEl.className = 'feedback-msg error';
    }
    
    // 显示解析按钮
    const toggleBtn = document.getElementById(`toggle-btn-${qIndex}`);
    toggleBtn.style.display = 'block';
    
    // 如果回答错误，自动展开解析
    if (!isCorrect) {
        toggleAnswer(qIndex);
    }
};

// 切换答案显示
window.toggleAnswer = function(index) {
    const answerDiv = document.getElementById(`answer-${index}`);
    const isHidden = answerDiv.style.display === 'none';
    
    // 先隐藏其他答案
    questions.forEach((_, i) => {
        if (i !== index) {
            document.getElementById(`answer-${i}`).style.display = 'none';
        }
    });
    
    answerDiv.style.display = isHidden ? 'block' : 'none';
    
    if (isHidden) {
        // 如果 MathJax 已经加载，确保当前显示的答案被渲染
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([answerDiv]).catch((err) => console.log('MathJax 渲染错误:', err.message));
        }
        // 滚动到答案位置
        setTimeout(() => {
            answerDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
};

// 绑定事件
generateBtn.addEventListener('click', generateQuestions);

// 键盘支持：Enter键生成题目
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.target === countInput || e.target === topicInput)) {
        generateQuestions();
    }
});

// 初始化
initSettings();
questionsContainer.innerHTML = `
    <div class="empty-state">
        <h2>🎓 微积分出题软件</h2>
        <p>输入想练习的知识点，由 AI 为您实时生成专属题目！</p>
    </div>
`;