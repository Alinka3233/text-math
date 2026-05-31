const topicSelect = document.getElementById('topicSelect');
const countInput = document.getElementById('countInput');
const aiTopicInput = document.getElementById('aiTopicInput');
const localGenerateBtn = document.getElementById('localGenerateBtn');
const aiGenerateBtn = document.getElementById('aiGenerateBtn');
const questionsContainer = document.getElementById('questionsContainer');

const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const apiKeyInput = document.getElementById('apiKeyInput');
const baseUrlInput = document.getElementById('baseUrlInput');
const modelInput = document.getElementById('modelInput');

let questions = [];
let usedQuestionIds = new Set();

function getAiConfig() {
    return {
        apiKey: localStorage.getItem('ai_api_key') || 'f8f6d0752519adff511f15f9a1b684c7:MzVlOTZjYTBlZjM5MDMxNWE5MDY3NzJh',
        baseUrl: localStorage.getItem('ai_base_url') || 'https://spark-api-open.xf-yun.com/v1',
        model: localStorage.getItem('ai_model') || 'generalv3.5'
    };
}

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

document.addEventListener('dblclick', (e) => {
    e.preventDefault();
}, { passive: false });

function showError(message) {
    questionsContainer.innerHTML = `
        <div class="empty-state">
            <h2>⚠️ ${message}</h2>
            <p>请确保题库数据加载正确</p>
        </div>
    `;
}

function generateQuestionsFromLocal() {
    const topic = topicSelect.value;
    const count = Math.min(Math.max(parseInt(countInput.value) || 1, 1), 10);
    countInput.value = count;

    localGenerateBtn.disabled = true;
    localGenerateBtn.textContent = '⏳ 正在生成题目...';

    setTimeout(() => {
        try {
            let allQuestions = [];
            
            if (topic === 'all') {
                Object.values(questionBank).forEach(qs => {
                    allQuestions = allQuestions.concat(qs);
                });
            } else if (questionBank[topic]) {
                allQuestions = questionBank[topic];
            } else {
                throw new Error('未找到该知识点的题目');
            }

            const availableQuestions = allQuestions.filter(q => !usedQuestionIds.has(q.id));
            let selectedQuestions;

            if (availableQuestions.length >= count) {
                selectedQuestions = shuffleArray(availableQuestions).slice(0, count);
            } else {
                selectedQuestions = availableQuestions.slice();
                const needed = count - selectedQuestions.length;
                usedQuestionIds.clear();
                const moreQuestions = shuffleArray(allQuestions).slice(0, needed);
                selectedQuestions = selectedQuestions.concat(moreQuestions);
            }

            selectedQuestions.forEach(q => usedQuestionIds.add(q.id));

            questions = selectedQuestions.map(q => {
                const options = generateOptions(q.answer);
                return {
                    id: q.id,
                    topic: q.topic,
                    question: q.question,
                    answer: q.answer,
                    solution: q.solution,
                    options,
                    hasAnswered: false
                };
            });

            displayQuestions();
            questionsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (error) {
            console.error('生成题目失败:', error);
            showError(`生成题目失败：${error.message}`);
        } finally {
            localGenerateBtn.disabled = false;
            localGenerateBtn.textContent = '📚 从题库生成';
        }
    }, 100);
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateOptions(correctAnswer) {
    const options = [{ text: String(correctAnswer), isCorrect: true }];
    
    const distractors = [];
    for (let i = 0; i < 3; i++) {
        distractors.push({ text: `干扰项${String.fromCharCode(65 + i)}`, isCorrect: false });
    }
    
    options.push(...distractors);
    
    return shuffleArray(options);
}

async function generateQuestionsFromAI() {
    const topic = aiTopicInput.value.trim() || '随机微积分知识点';
    const count = Math.min(Math.max(parseInt(countInput.value) || 1, 1), 10);
    countInput.value = count;
    
    const config = getAiConfig();
    if (!config.apiKey) {
        showError('请先点击右上角 "⚙️ AI 设置" 配置 API Key');
        settingsModal.style.display = 'flex';
        return;
    }
    
    aiGenerateBtn.disabled = true;
    aiGenerateBtn.textContent = '⏳ 正在请求 AI...';
    
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

        let url = `${config.baseUrl.replace(/\/+$/, '')}/chat/completions`;
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model || 'generalv3.5',
                messages: [{ role: 'user', content: prompt }]
            })
        };

        let response;
        try {
            // 首先尝试直接请求
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000); // 15秒超时
            
            response = await fetch(url, {
                ...options,
                signal: controller.signal
            });
            clearTimeout(timeoutId);
        } catch (fetchError) {
            console.warn('直接请求失败，可能是跨域或超时，尝试使用多个代理...', fetchError);
            
            // 定义多个代理源以增加成功率
            const proxies = [
                'https://corsproxy.io/?',
                'https://api.allorigins.win/raw?url=',
                'https://cors-anywhere.herokuapp.com/'
            ];
            
            let proxySuccess = false;
            
            for (const proxyBase of proxies) {
                try {
                    const proxyUrl = proxyBase + encodeURIComponent(url);
                    console.log(`尝试代理: ${proxyBase}`);
                    
                    const proxyController = new AbortController();
                    const proxyTimeoutId = setTimeout(() => proxyController.abort(), 15000);
                    
                    response = await fetch(proxyUrl, {
                        ...options,
                        signal: proxyController.signal
                    });
                    
                    clearTimeout(proxyTimeoutId);
                    
                    if (response.ok) {
                        proxySuccess = true;
                        break; // 成功则跳出循环
                    }
                } catch (e) {
                    console.warn(`代理 ${proxyBase} 请求失败:`, e);
                }
            }
            
            if (!proxySuccess && (!response || !response.ok)) {
                throw new Error('网络请求失败。可能是 CORS 跨域问题或网络超时。请优先使用本地题库，或在 Android App 中使用 AI 功能。');
            }
        }

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
        
        if (content.startsWith('```json')) {
            content = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (content.startsWith('```')) {
            content = content.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }

        const jsonMatch = content.match(/\[[\s\S]*\]|\{[\s\S]*\}/);
        if (jsonMatch) {
            content = jsonMatch[0];
        }

        let aiQuestions;
        try {
            const sanitizeContent = content
                .replace(/[\u0000-\u001F]+/g, '')
                .replace(/\\(?!["\\/bfnrt])/g, '\\\\');
                
            aiQuestions = JSON.parse(sanitizeContent);
            
            if (!Array.isArray(aiQuestions)) {
                if (aiQuestions.questions && Array.isArray(aiQuestions.questions)) {
                    aiQuestions = aiQuestions.questions;
                } else if (aiQuestions.data && Array.isArray(aiQuestions.data)) {
                    aiQuestions = aiQuestions.data;
                } else {
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

        questions = aiQuestions.map((q, i) => {
            const qQuestion = q.question || q["题目"] || q["题干"] || "题目生成异常，请重试";
            const qAnswer = q.answer || q["答案"] || q["正确答案"] || "答案生成异常";
            const qSolution = q.solution || q["解析"] || q["详细解析"] || "解析生成异常";
            const qDistractors = q.distractors || q["干扰项"] || q["错误答案"] || [];

            let options = [{ text: String(qAnswer), isCorrect: true }];
            if (Array.isArray(qDistractors) && qDistractors.length > 0) {
                qDistractors.slice(0, 3).forEach(d => {
                    options.push({ text: String(d), isCorrect: false });
                });
            } else {
                options.push({ text: "干扰项A", isCorrect: false });
                options.push({ text: "干扰项B", isCorrect: false });
                options.push({ text: "干扰项C", isCorrect: false });
            }
            
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
        questionsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
        console.error('生成题目失败:', error);
        showError(`AI 生成失败：${error.message}`);
    } finally {
        aiGenerateBtn.disabled = false;
        aiGenerateBtn.textContent = '✨ AI 智能生成';
    }
}

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

    const renderMath = () => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([questionsContainer]).catch((err) => console.log('MathJax 渲染错误:', err.message));
        } else {
            setTimeout(renderMath, 200);
        }
    };
    renderMath();
}

window.selectOption = function(qIndex, optIndex) {
    const q = questions[qIndex];
    if (q.hasAnswered) return;
    
    q.hasAnswered = true;
    const selectedOption = q.options[optIndex];
    const isCorrect = selectedOption.isCorrect;
    
    q.options.forEach((opt, idx) => {
        const btn = document.getElementById(`btn-${qIndex}-${idx}`);
        btn.disabled = true;
        
        if (opt.isCorrect) {
            btn.classList.add('correct');
        } else if (idx === optIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    const feedbackEl = document.getElementById(`feedback-${qIndex}`);
    if (isCorrect) {
        feedbackEl.textContent = '🎉 回答正确！';
        feedbackEl.className = 'feedback-msg success';
    } else {
        feedbackEl.textContent = '❌ 回答错误。';
        feedbackEl.className = 'feedback-msg error';
    }
    
    const toggleBtn = document.getElementById(`toggle-btn-${qIndex}`);
    toggleBtn.style.display = 'block';
    
    if (!isCorrect) {
        toggleAnswer(qIndex);
    }
};

window.toggleAnswer = function(index) {
    const answerDiv = document.getElementById(`answer-${index}`);
    const isHidden = answerDiv.style.display === 'none';
    
    questions.forEach((_, i) => {
        if (i !== index) {
            document.getElementById(`answer-${i}`).style.display = 'none';
        }
    });
    
    answerDiv.style.display = isHidden ? 'block' : 'none';
    
    if (isHidden) {
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([answerDiv]).catch((err) => console.log('MathJax 渲染错误:', err.message));
        }
        setTimeout(() => {
            answerDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
};

localGenerateBtn.addEventListener('click', generateQuestionsFromLocal);
aiGenerateBtn.addEventListener('click', generateQuestionsFromAI);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.target === countInput || e.target === aiTopicInput)) {
        generateQuestionsFromLocal();
    }
});

initSettings();
questionsContainer.innerHTML = `
    <div class="empty-state">
        <h2>🎓 微积分出题软件</h2>
        <p>从本地题库选择知识点，或使用 AI 生成专属题目！</p>
    </div>
`;
