async function testCors() {
    try {
        const response = await fetch('https://spark-api-open.xf-yun.com/v1/chat/completions', {
            method: 'OPTIONS',
            headers: {
                'Origin': 'http://localhost:3000',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type, Authorization'
            }
        });
        console.log('CORS headers:', [...response.headers.entries()]);
    } catch (e) {
        console.error(e);
    }
}
testCors();