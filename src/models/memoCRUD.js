"use strict";

const db = require("../config/db");

const memoCRUD = {

    async getmemo() {
        try {
            const [rows, fields] = await db.query("SELECT * FROM memos");
            return rows; 
        }
        catch (err) {
            return err;
        }
    },

    async postmemo(posts) {
        try {
            const {comment} = posts;
            const result = await db.query("INSERT INTO memos SET ?", {comment});
            return result;
        }
        catch (err) {
            return err;
        }
    },

    async memooneget(posts) {
        try {
           const [rows, fields] = await db.query(`SELECT * FROM memos where id = ${ posts }`);
           return rows;
        }
        catch (err) {
           return err;
        }

   },

   async memoupdate(posts) {
       try {
           const { comment } = posts.body;
           const result = await db.query(`UPDATE memos SET ? where id = ${ posts.params.id };`, { comment });
           return result;
       }
       catch (err) {
           return err;
       }
   },

   async memodelete(posts) {
       try {
           const result = await db.query(`DELETE FROM memos where id = ${posts};`);
           return {success: true};
       }
       catch (err) {
           return err;
       }
   },

}

module.exports = memoCRUD;