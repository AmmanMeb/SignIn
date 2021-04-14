const express = require('express')
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const mysql = require('mysql')
var cors = require('cors')
const { json } = require('body-parser')
app.use(cors())

const port = 8080

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Steven1spielberg",
  port: "3306",
  database: "forum"
})

app.post('/signUp', function (req, res) {
    const queryString = "INSERT INTO accounts (Username, Password) VALUES (?, ?)"
    console.log (req.body)
    con.query(queryString, [req.body.username, req.body.password], function (err, result){
    if (err) {
      throw err
    }
     res.send ('Account Created')
    })
  })

app.post('/signIn', function (req, res){
  const queryString = 'SELECT * FROM accounts WHERE Username = ? AND Password  = ? LIMIT 1'
    console.log (req.body)
    con.query(queryString, [req.body.username, req.body.password], function (err, result){     
    if (err) {
     throw err;
    }    
    if (result.length !== 1) {
      return  res.send('Incorrect Login')
    }
    if (result.length === 1) {
     res.send('Logged In')
    };
    });  
});


app.listen(port, (  ) => {
  console.log(`Example app listening at http://localhost:${port}`)
})
