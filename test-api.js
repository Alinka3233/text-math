async function test() {
    try {
        const prompt = `请作为一名大学数学教授，生成 1 道关于【函数与极限】的大学微积分单项选择题。
要求：
1. 题目必须是计算题或概念题，要有一定的区分度。
2. 必须返回严格的 JSON 数组格式，不要包含任何 markdown 标记（如 \`\`\`json ），直接输出数组。
3. 数组中每个对象包含以下字段：
   - "id": 随机唯一字符串（如 "ai-12345"）
   - "topic": "函数与极限"
   - "question": 题目描述（所有数学公式必须使用 LaTeX 格式，行内公式用 $...$，独立公式用 $$...$$）
   - "answer": 正确答案（LaTeX 格式）
   - "distractors": 一个包含 3 个错误答案的数组（LaTeX 格式）
   - "solution": 详细的解题步骤和知识点解析（可以使用 LaTeX 和换行符 \\n）`;

        const response = await fetch('https://spark-api-open.xf-yun.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer f8f6d0752519adff511f15f9a1b684c7:MzVlOTZjYTBlZjM5MDMxNWE5MDY3NzJh`
            },
            body: JSON.stringify({
                model: 'generalv3.5',
                messages: [{ role: 'user', content: prompt }]
            })
        });
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(e);
    }
}
test();