const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let sensorData = [];

app.post('/api/data', (req, res) => {
  const { value } = req.body;
  sensorData.push({ value, timestamp: new Date() });
  res.status(201).json({ message: 'Dados recebidos com sucesso' });
});

app.get('/api/data', (req, res) => {
  res.json(sensorData);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
