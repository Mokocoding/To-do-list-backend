"use strict";

const db = require("../config/db");

class PostCRUD {
    static postcreate(posts) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO posts SET ?"; 
            const { description, target_date } = posts;
        db.query(query, {description, target_date}, 
            (err, data) => {
                if (err) reject(`${err}`);
                data = {
                    "id": data.insertId,
                    "description": description,
                    "target_date": target_date,
                }
                resolve(data);
            }
        )})
    
    }
}
module.exports = PostCRUD; 
