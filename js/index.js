const express = require('express');
const app = express();
const poll = require('./dataBase/db');

app.use(express.json());