const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    const input = req.body.userInput;
    const length = input.length;

    res.send(textContent);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
