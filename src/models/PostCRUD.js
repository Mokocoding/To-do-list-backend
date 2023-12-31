"use strict";

const db = require("../config/db");

const PostCRUD = {
    async postget() {
        try {
            const [rows, fields] = await db.query("SELECT * FROM posts");
            return rows;
        }
        catch (err) {
            return err;
        }
    },

    async postcreate(posts) {
        try { 
            const { description, target_date } = posts;
            const result = await db.query("INSERT INTO posts SET ?;", { description, target_date });
            return result;
        }
        catch (err) {
            return { "statusCode":500, msg : "게시글 생성 도중 발생한 서버 에러" };
        }
    },

    async postoneget(posts) {
         try {
            const [rows, fields] = await db.query(`SELECT * FROM posts where id = ${ posts }`);
            return rows;
         }
         catch (err) {
            return err;
         }

    },

    async postupdate(posts) {
        try {
            const { description, target_date } = posts.body;
            const result = await db.query(`UPDATE posts SET ? where id = ${ posts.params.id };`, { description, target_date });
            return result;
        }
        catch (err) {
            return err;
        }
    },

    async postdelete(posts) {
        try {
            const result = await db.query(`DELETE FROM posts where id = ${posts};`);
            return {success: true};
        }
        catch (err) {
            return err;
        }
    },


}

// class PostCRUD {

    
//      async postcreate(posts) {
//         try {
//             console.log(posts);
//             const query = "INSERT INTO posts SET ?;";
//             const { description, target_date } = posts; 

//             await db.query(query, {description, target_date},
//                 (err, data) => {
//                     const response = {
//                         "id": data.insertId,
//                         "description": description,
//                         "target_date": target_date,
//                     };
//                     return response;
//                 });
//         //     return new Promise((resolve, reject) => {

//         //     const query = "INSERT INTO posts SET ?;"; 
//         //     const { description, target_date } = posts;

//         //     db.query(query, {description, target_date}, 
//         //         (err, data) => {
//         //             if (err) reject(`${err}`);
//         //             data = {
//         //                 "id": data.insertId,
//         //                 "description": description,
//         //                 "target_date": target_date,
//         //             }
//         //             resolve(data);
//         //         }
//         //     );
//         // })
//         }
//         catch(err)  {
//             console.log(err);
//         };
// }

//      static async postget() {
//         try {
//             let [rows, fields] = await db.query("SELECT * FROM posts");
//             console.log(rows);
//             return rows;
//             // const [rows,fields] = await db.execute("SELECT * FROM posts");
//             // console.log(rows);
//             // return rows;
//         }
//         catch(err) { 
//             console.log(err);
//         }
//         // return new Promise((resolve, reject) => {
//         //     const query = "SELECT * FROM posts;";
            
//         //     connection.query(query, 
//         //         (err, data) => {
//         //             if (err) reject(`${err}`);
//         //             resolve(data);
//         //     });
//         // });
//     }

//     static postoneget(posts) {
//         return new Promise((resolve, reject) => {

//             const query = `SELECT * FROM posts WHERE id =${posts};`;

//             db.query(query,
//                 (err, data) => {
//                     if (err) reject(`${err}`);
//                     resolve(data);
//                 });
//         });
//     }

//     static postupdate(posts) {
//         return new Promise((resolve, reject) => {

//             const query = `UPDATE posts SET ? where id=${posts.params.id};`;
//             const { description, target_date } = posts.body;

//             db.query(query, { description, target_date },
//                 (err, data) => {
//                     data = {
//                         "id": posts.params.id,
//                         "description": description,
//                         "target_date": target_date,
//                     };
//                     if (err) reject(`${err}`);
//                     resolve(data);
//                 });

//         });
//     }

//     static postdelete(posts) {
//         return new Promise((resolve, reject) => {
            
//             const query = `DELETE FROM posts where id = ${posts};`;

//             db.query(query, 
//                 (err, data) => {
//                     data = {msg : "삭제완료"};
//                     if (err) reject(`${err}`);
//                     resolve(data);
//                 });
//         });
//     }
// }
module.exports = PostCRUD; 