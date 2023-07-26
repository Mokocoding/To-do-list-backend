"use strict";
const db = require("./config/db");

    const posttodo = (req, res) => {
    const query = "INSERT INTO posts SET ?";

    const { description, target_date } = req.body;

    db.query(query, { description, target_date },
        (err, result) => {
            const post = {
                "id": result.insertId,
                "description": description,
                "target_date": target_date,
            };
            if (err) return res.json(err);
            return res.status(201).json(post);
        });
    }

    const postget = (req, res) => {
    const query = "SELECT * FROM posts";
    
    db.query(query,(err,result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
    }

    // const postoneget = (req, res) => {
    // const query = "SELECT ? FROM posts";

    // const id = req.body;
    // db.query(query,id, (err,result) => {
    //     if (err) return res.json(err);
    //     return res.status(200).json(result);
    // })
    // }



module.exports = {
    posttodo,
    postget,
    // postoneget,
};

