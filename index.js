const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => 
    res.send('Hello Eagles!!')
)

//Connecting to MySQL DB
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "192.168.102.49",
    user: "mysqluser",
    password: "Mysqlpwd1"
  });

app.get('/TestMySQLdb',(req,res) =>
con.connect(function(err) {
    if (err) throw err;
    res.send("Connected to MySQL DB!");
    })
)

//Connecting to MSSQL DB
const sqlserver = require("mssql");
const config = {
    user: 'mssqluser',
    password: 'Mssqlpwd1',
    server: '192.168.102.41', 
    database: 'testsqlserver' 
};
app.get('/TestSqlServer',(req, res) => {
    // connection to SQL Server database
    sqlserver.connect(config, err => { 
        if(err){  throw err ; }
        res.send("Connection to Microsoft SQL Server Successful !");
    });
});

app.listen(port, () => 
console.log(`Example app listening at http://localhost:${port}`))
