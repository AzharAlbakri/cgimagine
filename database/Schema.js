var mysql = require('mysql');
// const importer = require('node-mysql-importer');
//install my sql

// Note: to insert tht the database credential
var dbConnection = mysql.createConnection({
  host: "db4free.net",
  user: "cgimagine",
  password: 'cgimaginecgimagine',
  insecureAuth: true,
  database: 'cgimagine'
})

//Note:create the connection
dbConnection.connect(function(err) {
  if (err) {
    console.log("access denied to the database", err);
  } else {
    console.log("database has been connected");
  }
});

// Create user table
var users = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(355) NOT NULL,
    imgUrl VARCHAR(355) NOT NULL DEFAULT '',
    PRIMARY KEY (id)
  );
`;

var todos = `
CREATE TABLE IF NOT EXISTS todos  (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    description MEDIUMTEXT NOT NULL,
    owner_id integer,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(30) NOT NULL, 
    FOREIGN KEY (owner_id) REFERENCES users(id), 
    PRIMARY KEY (id)
  );
`;
// ALTER TABLE todos ADD FOREIGN KEY (owner_id) REFERENCES Users(id)

// Note:create the table
dbConnection.query(users, function(err, result) {
  if (result) {
    console.log("users table has been created");
  } else {
    console.log("users table return an ERROR", err);
  }
});

// Note:create the table
dbConnection.query(todos, function(err, result) {
  if (result) {
    console.log("todos table has been created");
  } else {
    console.log("todos table return an ERROR", err);
  }
});

module.exports.Schema = dbConnection;