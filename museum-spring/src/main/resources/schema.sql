CREATE TABLE IF NOT EXISTS MUSEUM (
   id INT PRIMARY KEY,
   name VARCHAR(250) NOT NULL,
   location VARCHAR(250) NOT NULL,
   description VARCHAR(2000) NOT NULL
);

CREATE TABLE IF NOT EXISTS ARTIST (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  dob_and_dod VARCHAR(100) NOT NULL,
  birthplace VARCHAR(100) NOT NULL,
  bio VARCHAR(2000) NOT NULL
);

CREATE TABLE IF NOT EXISTS PAINTING (
     id INT PRIMARY KEY,
     museum_id INT NOT NULL,
     artist_id INT NOT NULL,
     title VARCHAR(200) NOT NULL,
     year_of VARCHAR(100) NOT NULL,
     medium VARCHAR(100) NOT NULL,
     style VARCHAR(100) NOT NULL,
     description VARCHAR(1000) NOT NULL,
     FOREIGN KEY (museum_id) references MUSEUM(id),
     FOREIGN KEY (artist_id) references ARTIST(id)
);

CREATE TABLE IF NOT EXISTS SCULPTURE (
     id INT PRIMARY KEY,
     museum_id INT NOT NULL,
     artist_id INT NOT NULL,
     title VARCHAR(200) NOT NULL,
     year_of VARCHAR(100) NOT NULL,
     medium VARCHAR(100) NOT NULL,
     style VARCHAR(100) NOT NULL,
     description VARCHAR(1000) NOT NULL,
     FOREIGN KEY (museum_id) references MUSEUM(id),
     FOREIGN KEY (artist_id) references ARTIST(id)
);

CREATE TABLE IF NOT EXISTS ART (
     id INT PRIMARY KEY,
     museum_id INT NOT NULL,
     artist_id INT NOT NULL,
     title VARCHAR(200) NOT NULL,
     year_of VARCHAR(100) NOT NULL,
     medium VARCHAR(100) NOT NULL,
     style VARCHAR(100) NOT NULL,
     description VARCHAR(1000) NOT NULL,
     FOREIGN KEY (museum_id) references MUSEUM(id),
     FOREIGN KEY (artist_id) references ARTIST(id)
);