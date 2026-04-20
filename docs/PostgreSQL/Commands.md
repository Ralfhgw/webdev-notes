WebLinks

[PostgreSQL Datatypes](https://www.postgresql.org/docs/current/datatype.html)

[Database Modelling](https://dbdiagram.io/home)

| **Command**      | **Action**         | **Explanation**                                                                                                                                   |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`\q`**         | **Quit**           | Exits the `psql` program and returns you to your terminal shell.                                                                                  |
| **`exit`**       | **Quit**           | Same as `\q`. Added in newer versions to match other shell environments.                                                                          |
| **`quit`**       | **Quit**           | Same as `\q`. Added in newer versions to match other shell environments.                                                                          |
| **`\l`**         | **List Databases** | Displays all databases on the current server, along with their owners and access privileges.                                                      |
| **`\c dbname`**  | **Connect**        | Switches your active connection to the database named `dbname`. You can also specify a user: `\c dbname username`.                                |
| **`\dt`**        | **List Tables**    | Lists all tables in the current database's search path (usually the `public` schema). Use `\dt+` for extra details like disk size.                |
| **`\d table`**   | **Describe Table** | Shows the detailed structure of a specific table: columns, data types, modifiers (e.g., `NOT NULL`), and indexes.                                 |
| **`\du`**        | **List Users**     | Lists all database roles (users) and their global attributes (e.g., Superuser, Create DB).                                                        |
| **`\dn`**        | **List Schemas**   | Lists all schemas (namespaces) within the current database.                                                                                       |
| **`\x`**         | **Toggle Display** | Switches output between the standard horizontal table view and "Expanded" vertical card view. Essential for reading wide tables on small screens. |
| **`\?`**         | **Help (psql)**    | Shows the full list of backslash (`\`) meta-commands available in `psql`.                                                                         |
| **`\h COMMAND`** | **Help (SQL)**     | Shows syntax help for a specific SQL command (e.g., `\h CREATE TABLE`).                                                                           |
```
psql -U coolzero91 -h localhost -d test -a -f clean.sql
```
##### Datenbank erstellen
```
ralf=> CREATE DATABASE movies;
```
##### Liste Datenbanken anzeigen
```
ralf=> \list
```
##### Zur Datenbank wechseln
```
ralf-> \c movies
You are now connected to database "movies" as user "ralf".
```
Anzeige der aktuellen Datenbankparameter
```
movies-> \conninfo
           Connection Information
      Parameter       |        Value
----------------------+---------------------
 Database             | movies
...
```
##### Erstellen des Datenbankinhalts (Beispiel)
- SERIAL → Auto-Increment für Primärschlüssel
- REFERENCES directors(id) → Fremdschlüssel auf directors
- NOT NULL → Pflichtfelder (title und name sollten immer gesetzt sein)

##### Erstellen Tabelle directors
```
movies-> CREATE TABLE directors (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    birthdate INT, 
    spouse TEXT);
```
##### Erstellen Tabelle movies 
##### Wichtig: "REFERENCES directors(id)" erstellt gleichzeitig einen "Foreign Key"
```
movies-> CREATE TABLE movies (
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    release_year INT, 
    director_id INT REFERENCES directors(id));
```
##### Einfügen von Daten in directors
```
movies-> INSERT INTO directors (name, birthdate, spouse) VALUES
('Cameron', 1970, NULL),
('Coppola', 1950, NULL),
('Hitchcock', 1900, 'Mary');
```
##### Einfügen von Daten in movies
```
movies-> INSERT INTO movies (title, release_year, director_id) VALUES
('Titanic', 2000, 1),
('Godfather', 1972, 2),
('Psycho', 1960, 3),
('The Man He Knew Too Much', 1955, 3);
```
##### Anzeigen aller Filme
```
movies-> SELECT * FROM movies;
```
##### Anzeigen aller Regisseure
```
movies-> SELECT * FROM directors;
```
##### Join Filme + Regisseure
```
movies-> SELECT 
    m.title, 
    m.release_year, 
    d.name AS director_name FROM movies m JOIN directors d ON m.director_id = d.id;
```
##### Anzeigen des Tabelleninhalts
```
ralf=> SELECT * FROM movies;
```
##### Speichern der Datenbank in Datei
```
$ pg_dump movies > excercise-1.sql
```
##### Hinzufügen eines neuen Films mit einer unbekannten director_id
```
movies=> INSERT INTO movies (title, release_year, director_id) VALUES ('test', 1999, 4);
ERROR:  insert or update on table "movies" violates foreign key constraint "movies_director_id_fkey"
DETAIL:  Key (director_id)=(4) is not present in table "directors".
```
##### Postgres Foreign Keys hinzufügen, falls nicht schon vorhanden (prüfen mit \d movies)
```
movies=> ALTER TABLE movies 
    ADD CONSTRAINT fk_movies_director 
    FOREIGN KEY (director_id) 
    REFERENCES directors(id);
```
##### Postgres Foreign Keys wieder entfernen
```
movies=> ALTER TABLE movies DROP CONSTRAINT fk_movies_director;
```
##### Löschen des Tabellennhalts 
```
ralf=> DELETE FROM movies;
```
##### Löschen der Tabell
```
ralf=> DROP TABLE movies;
```

##### Erstellen eines many-to-many relationship
Ein Schauspieler spielt in vielen Filmen
Ein Film hat viele Schauspieler
Lösung: Join-/Zwischentabelle

##### Tabelle actors erstellen
```
movies-> CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
```
##### Daten zur Tabelle actors hinzufügen
```
movies-> INSERT INTO actors (name) VALUES
('Leonardo DiCaprio'),
('Kate Winslet'),
('Anthony Perkins');
```
##### Join-Tabelle anlegen
```
movies-> CREATE TABLE movie_actors (
    movie_id INT NOT NULL,
    actor_id INT NOT NULL,

    CONSTRAINT pk_movie_actors
        PRIMARY KEY (movie_id, actor_id),

    CONSTRAINT fk_movie
        FOREIGN KEY (movie_id)
        REFERENCES movies(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_actor
        FOREIGN KEY (actor_id)
        REFERENCES actors(id)
        ON DELETE CASCADE
);
```
##### Hinzufügen von Daten zur Join-Tabelle
```
-- Titanic (id = 1)
movies-> INSERT INTO movie_actors (movie_id, actor_id) VALUES
(1, 1),
(1, 2);

-- Psycho (id = 3)
movies-> INSERT INTO movie_actors (movie_id, actor_id) VALUES
(3, 3);
```
##### Abfrage aller Schauspieler eines Films
```
SELECT
    m.title,
    a.name AS actor
FROM movies m
JOIN movie_actors ma ON m.id = ma.movie_id
JOIN actors a ON ma.actor_id = a.id
WHERE m.title = 'Titanic';
```
##### Abfrage aller Filme eines Schauspielers
```
SELECT
    a.name,
    m.title
FROM actors a
JOIN movie_actors ma ON a.id = ma.actor_id
JOIN movies m ON ma.movie_id = m.id
WHERE a.name = 'Leonardo DiCaprio';
```
##### Anzahl der Schauspieler pro Film
```
SELECT
    m.title,
    COUNT(ma.actor_id) AS actor_count
FROM movies m
LEFT JOIN movie_actors ma ON m.id = ma.movie_id
GROUP BY m.title;
```

##### Zuweisen von Berechtigungen
```
sql-02=> SELECT * FROM earthquake;
ERROR:  permission denied for table earthquake
sql-02=> GRANT ALL PRIVILEGES ON TABLE earthquake TO ralf;
sql-02=> GRANT ALL PRIVILEGES ON SEQUENCE earthquake_id_seq TO ralf;
```