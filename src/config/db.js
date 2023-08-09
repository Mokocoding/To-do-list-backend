"use strict";
const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "todolist-jbh.cqkozhkjemec.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "bn181818",
    database: "todo_list",
});


module.exports = db;