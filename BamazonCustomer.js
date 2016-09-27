//require mysql
var mysql = require('mysql');

//create database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
//array for products
var productsArray = [];

connection.query('SELECT * FROM `products`',function(err, res){
  if (err) {
    throw err;
  }
  console.log('Results: ', res);
});

/*
//require cli-table
var Table = require('cli-table');

// instantiate 
var table = new Table({
    head: ['Product Name', 'Department Name', 'Price', 'Quantity in Stock']
  , colWidths: [100, 200]
});
*/



//end connection
connection.end();