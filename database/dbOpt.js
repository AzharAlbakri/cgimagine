const express = require('express');
const bcrypt = require('bcrypt-nodejs');

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "db4free.net",
        user: "cgimagine",
        password: 'cgimaginecgimagine',
        insecureAuth: true,
        database: 'cgimagine'
    }
  });

  var dbConnection = mysql.createConnection({
    host: "db4free.net",
    user: "cgimagine",
    password: 'cgimaginecgimagine',
    insecureAuth: true,
    database: 'cgimagine'
  })
  dbConnection.connect(function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Connected')
    }
  })