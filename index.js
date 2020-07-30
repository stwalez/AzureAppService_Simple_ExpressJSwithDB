const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => 
    res.send('Hello Eagles!!')
);

//Connecting to MySQL DB
const mysql = require('mysql');
const con = mysql.createConnection({
    host: process.env.MYSQLCONNSTR_mysqlhost,
    user: process.env.MYSQLCONNSTR_mysqluser,
    password: process.env.MYSQLCONNSTR_mysqlpwd,
    database: process.env.MYSQLCONNSTR_mysqldb
});

app.get('/TestMySQLdb',(req,res) =>
con.connect(function(err) {
    if (err) throw err;
    res.send("Connected to MySQL DB!");
    })
);

//Connecting to MSSQL DB
const sqlserver = require("mssql");
const config = {
    user: process.env.SQLCONNSTR_sqlsrvuser,
    password: process.env.SQLCONNSTR_sqlsrvpwd,
    server: process.env.SQLCONNSTR_sqlsrvhost, 
    database: process.env.SQLCONNSTR_sqlsrvdb 
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