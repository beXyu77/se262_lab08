"ues strict"

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
/*
app.get('/', function (req, res) {
    res.send('Hello World');
});
*/
app.get("/", function (req,res){
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    })

app.post("/", function (req,res) {
    var result = Number(req.body.weight) / Number(req.body.height)**2;
    res.send("The result of the calculation is " + result);
    })

/*
app.listen(3000, () => {
    console.log('hello');
});
*/
app.listen(5500, function () {
    console.log("Server starts at port 5500");
    })