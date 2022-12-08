const express = require ('express');
const bodyParser = require('body-parser');

const app = express(); //setting up a new app that will use the express module
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html"); // this is how index.html is connected
});

app.post('/', function(req, res) {

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);
var result = num1 + num2;

  res.send('The result of the calculation is ' + result);
});


//_______________BMI Calculator_______________

app.get('/bmicalculator', function (req, res) { // what happens when the user goes to /bmicalculator
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function (req,res) { // what happens when the user sends a post request

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/Math.pow(height,2);

  res.send('Your BMI is ' + bmi);

});



//_______________app.listen_______________


app.listen(3000, function() {
console.log('Server started on port 3000')
});
