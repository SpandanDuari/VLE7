const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>CI/CD Demo</h1>
    <p>Sec: D1</p>
    <p>Reg No. - RA2311003010207</p>
    <p>Hostname: ${os.hostname()}</p>
    <p>Time: ${new Date()}</p>
  `);
});

app.get('/health', (req, res) => res.send("OK"));

app.listen(3000, () => console.log("Running"));
