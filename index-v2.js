var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ifrc',
  database : 'fish_co'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
	connection.query('SELECT * from candidate LIMIT 2', function(err, rows, fields) {
	connection.end();
	  if (!err)
	    // console.log('The solution is: ', rows);
	    console.log('Success load');
	  else
	    console.log('Error while performing Query.');
	  });
});

app.listen(3000);