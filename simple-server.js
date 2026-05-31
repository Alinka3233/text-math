const http = require('http');
const fs = require('fs');
const path = require('path');
const questionBank = require('./questionBank');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json'
};

function serveStatic(res, filePath, contentType) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

function handleApiRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  res.writeHead(200, { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  if (pathname === '/api/topics') {
    res.end(JSON.stringify(Object.keys(questionBank)));
  } else if (pathname === '/api/questions/random') {
    const topic = url.searchParams.get('topic');
    const count = parseInt(url.searchParams.get('count')) || 1;
    
    let questions = [];
    if (topic && questionBank[topic]) {
      questions = [...questionBank[topic]];
    } else {
      questions = Object.values(questionBank).flat();
    }
    
    const shuffled = questions.sort(() => Math.random() - 0.5);
    res.end(JSON.stringify(shuffled.slice(0, count)));
  } else if (pathname === '/api/chat/completions' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', async () => {
      try {
        const { config, prompt } = JSON.parse(body);
        const fetchResponse = await fetch(`${config.baseUrl.replace(/\/+$/, '')}/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`
          },
          body: JSON.stringify({
            model: config.model,
            messages: [{ role: 'user', content: prompt }]
          })
        });
        
        if (!fetchResponse.ok) {
          res.writeHead(fetchResponse.status);
          res.end(JSON.stringify({ error: `API Error: ${fetchResponse.statusText}` }));
          return;
        }
        
        const data = await fetchResponse.json();
        res.end(JSON.stringify(data));
      } catch (error) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  } else if (pathname.startsWith('/api/questions/')) {
    const topic = decodeURIComponent(pathname.replace('/api/questions/', ''));
    if (questionBank[topic]) {
      res.end(JSON.stringify(questionBank[topic]));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Topic not found' }));
    }
  } else if (pathname.startsWith('/api/question/')) {
    const id = pathname.replace('/api/question/', '');
    const allQuestions = Object.values(questionBank).flat();
    const question = allQuestions.find(q => q.id === id);
    if (question) {
      res.end(JSON.stringify(question));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Question not found' }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/')) {
    handleApiRequest(req, res);
  } else {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    serveStatic(res, filePath, contentType);
  }
});

server.listen(PORT, () => {
  console.log(`微积分出题软件已启动！`);
  console.log(`请在浏览器中打开: http://localhost:${PORT}`);
});
