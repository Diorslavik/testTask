const express = require('express');
const app = express();

require('dotenv').config();

app.get('/status', (req, res) => res.status(200).json({message: 42}));
app.listen(process.env.APP_PORT);

console.log(`[+] Server started on ${process.env.APP_PORT} port`);
