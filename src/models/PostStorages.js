// "use strict";
const db = require("../config/db");

class CRUD {
    constructor(body) {
        this.body = body;
    }

    static todopost(getpost) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO posts SET ?";
            db.query(query,[getpost.body.description, getpost.body.target_date],
                (err, result) => {
                    const postinfo = {
                        // "id": result.insertId,
                        "description": getpost.description,
                        "target_date": getpost.target_date
                    }
                    if (err) reject(`${err}`);
                    resolve(postinfo);
            } );
        });
    }
}

module.exports = CRUD;
