const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '*******!',
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established sucessfully');
});
connection.end((error) => {
});