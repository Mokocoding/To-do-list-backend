"use strict";

const db = require("../config/db");

class PostCRUD {

    static postcreate(posts) {
        return new Promise((resolve, reject) => {

            const query = "INSERT INTO posts SET ?;"; 
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
            );
        });
    
    }

    static postget() {
        return new Promise((resolve, reject) => {

            const query = "SELECT * FROM posts;";
            
            db.query(query, 
                (err, data) => {
                    if (err) reject(`${err}`);
                    resolve(data);
            });
        });
    }

    static postoneget(posts) {
        return new Promise((resolve, reject) => {

            const query = `SELECT * FROM posts WHERE id =${posts};`;

            db.query(query,
                (err, data) => {
                    if (err) reject(`${err}`);
                    resolve(data);
                });
        });
    }

    static postupdate(posts) {
        return new Promise((resolve, reject) => {

            const query = `UPDATE posts SET ? where id=${posts.params.id};`;
            const { description, target_date } = posts.body;

            db.query(query, { description, target_date },
                (err, data) => {
                    data = {
                        "id": posts.params.id,
                        "description": description,
                        "target_date": target_date,
                    };
                    if (err) reject(`${err}`);
                    resolve(data);
                });

        });
    }

    static postdelete(posts) {
        return new Promise((resolve, reject) => {
            
            const query = `DELETE FROM posts where id = ${posts};`;

            db.query(query, 
                (err, data) => {
                    data = {msg : "삭제완료"};
                    if (err) reject(`${err}`);
                    resolve(data);
                });
        });
    }
}
module.exports = PostCRUD; 
