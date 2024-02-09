const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    fs.readFile('counter.txt', 'utf8', (err, data) => {
    if (err) throw err;

    let counter = parseInt(data) || 0; 

    counter++;
    fs.writeFile('counter.txt', counter.toString(), (err) => {
        if (err) throw err;

    res.send(`There has been ${counter} hit${counter === 1 ? '' : 's'} to this page`);
    });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});