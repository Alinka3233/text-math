const testProxy = async () => {
    const url = 'https://api520.pro/v1/chat/completions';
    
    console.log('Testing api:', url);
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-7yD7BPoJq7XcZPL3sixfkp6C4CH8uMq3tX0ZEWwH73KabREk'
            },
            body: JSON.stringify({
                model: '熊猫-2-gemini-3.1-flash-lite-preview',
                messages: [{ role: 'user', content: 'test' }]
            })
        });
        
        console.log('Status:', response.status);
        const text = await response.text();
        console.log('Response:', text);
    } catch (e) {
        console.error('Error:', e);
    }
};

testProxy();
