sqlite3 mySQLiteDB.db

create table if not exists Categories(
    id integer primary key autoincrement,
    name text not null
)