const mysql = require("mysql");

const db = mysql.createConnection({
    host: "todolist-jbh.cqkozhkjemec.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "bn181818",
    database: "todo_list",
});

db.connect();

module.exports = db;