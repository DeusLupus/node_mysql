//require mysql
var mysql = require('mysql');

//create database connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bamazon'
});

//connect to database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

//require cli-table
var Table = require('cli-table');

//instantiate table
var table = new Table({
	head: ['TH 1 label', 'TH 2 label'],
	colWidths: [100, 200]
});

//end connection
connection.end();