const express = require('express');
const fs = require('fs');
const app = express();
const bodyparser = require("body-parser");
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const { firstname, lastname } = req.body;

    if (!firstname || !lastname) {
    return res.send('You must enter both your first name and last name!');
    }else{
        const guestData = `${firstname},${lastname}\n`;
        fs.appendFile('guest.txt', guestData, (err) => {
            if (err){
                console.log(err);
            }res.sendFile(__dirname + '/thankyou.html');
        });
    }
});

app.get('/guestbook', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    
    fs.readFile("guest.txt", (err, data) => {
        if (err) {
            console.log(err);
        }
    
        let file = data.toString().split("\n");
        let count = file.length - 1;
    
        let responseHTML = `<h1>The number of guests is ${count}</h1>`;
        for (let i = 0; i < count; i++) {
            responseHTML += `<br><b>No: ${i + 1}</b>`;
            let datas = file[i].split(",");
            responseHTML += `<p>First name: ${datas[0]}</p>`;
            responseHTML += `<p>Last name: ${datas[1]}</p>`;
        }
    
        res.write(responseHTML);
        res.end();
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
