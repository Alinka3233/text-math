const express = require('express');
const cors = require('cors');
const axios = require('axios');
const questionBank = require('./questionBank');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/topics', (req, res) => {
  const topics = Object.keys(questionBank);
  res.json(topics);
});

app.get('/api/questions/random', (req, res) => {
  const { topic, count = 1 } = req.query;
  let questions = [];

  if (topic && questionBank[topic]) {
    questions = [...questionBank[topic]];
  } else {
    const allQuestions = Object.values(questionBank).flat();
    questions = [...allQuestions];
  }

  const shuffled = questions.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, parseInt(count));
  
  res.json(selected);
});

app.get('/api/questions/:topic', (req, res) => {
  const { topic } = req.params;
  if (questionBank[topic]) {
    res.json(questionBank[topic]);
  } else {
    res.status(404).json({ error: 'Topic not found' });
  }
});

app.get('/api/question/:id', (req, res) => {
  const { id } = req.params;
  const allQuestions = Object.values(questionBank).flat();
  const question = allQuestions.find(q => q.id === id);
  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ error: 'Question not found' });
  }
});

// 代理 AI 请求解决 CORS 问题
app.post('/api/chat/completions', async (req, res) => {
  try {
    const { config, prompt } = req.body;
    
    if (!config || !config.baseUrl || !config.apiKey) {
      return res.status(400).json({ error: { message: 'Missing AI configuration' } });
    }

    const response = await axios({
      method: 'post',
      url: `${config.baseUrl.replace(/\/+$/, '')}/chat/completions`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`
      },
      data: {
        model: config.model || 'generalv3.5',
        messages: [{ role: 'user', content: prompt }]
      },
      timeout: 60000 // 增加超时时间到60秒
    });

    res.json(response.data);
  } catch (error) {
    console.error('Proxy Error:', error.message);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      res.status(error.response.status).json({ 
        error: { 
          message: `API Error ${error.response.status}: ${JSON.stringify(error.response.data)}` 
        } 
      });
    } else if (error.request) {
      // The request was made but no response was received
      res.status(504).json({ error: { message: 'API request timeout or no response' } });
    } else {
      // Something happened in setting up the request that triggered an Error
      res.status(500).json({ error: { message: error.message } });
    }
  }
});

app.listen(PORT, () => {
  console.log(`微积分出题软件已启动，访问 http://localhost:${PORT}`);
});
