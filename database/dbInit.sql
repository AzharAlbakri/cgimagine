-- User table
CREATE TABLE IF NOT EXISTS users (
        id INTEGER NOT NULL AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(355) NOT NULL,
        imgUrl VARCHAR(355) NOT NULL DEFAULT '',
        PRIMARY KEY (id)
      );
-- Linkes table
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

    ALTER TABLE Todos ADD FOREIGN KEY (owner_id) REFERENCES Users(id);