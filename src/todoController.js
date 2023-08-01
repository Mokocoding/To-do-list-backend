"use strict";
<<<<<<< HEAD
const db = require("./config/db");
const PostCRUD = require("./models/PostCRUD");
=======
>>>>>>> 3b3be12f95fc0bc234982188c568aeb2270a7462
const CRUD = require("./models/CRUD");

    const posttodo = async (req, res) => {
        const newPost = new CRUD(req.body); 
        const response = await newPost.post()
<<<<<<< HEAD
        return res.json(response);
        // db.query(query, { description, target_date },
        //     (err, result) => {
        //         const post = {
        //             "id": result.insertId,
        //             "description": description,
        //             "target_date": target_date,
        //         };
        //         if (err) return res.json(err);
        //         return res.status(201).json(post);
            // }); 
    } 

    const postget = (req, res) => {
        const query = "SELECT * FROM posts";
        
        db.query(query,(err,result) => {
            if (err) return res.json(err);
            return res.status(200).json(result);
        });
    }

    const postoneget = (req, res) => {
        const query = `SELECT * FROM posts where id=${req.params.id}`;

        db.query(query,(err,result) => {
            if (err) return res.json(err);
            return res.status(200).json(result);
        });
    }

    const postpatch = (req, res) => {
        const query = `UPDATE posts SET ? where id=${req.params.id}`;
        const { description, target_date } = req.body;

        db.query(query,{ description, target_date}, 
            (err, result) => {
                const post = {
                    "id": req.params.id,
                    "description": description,
                    "target_date": target_date
                };
                if(err) return res.json(err);
                return res.status(200).json(post);
            });
    }

    const postdelete = (req, res) => {
        const query = `DELETE FROM posts WHERE id=${req.params.id}`;

        db.query(query,(err, result) => {
            if(err) return res.json(err);
            return res.status(200).json("삭제완료");
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
=======
        return res.status(201).json(response);
    } 


    const postget = async (req, res) => {
        const newPost = new CRUD();
        const response = await newPost.get();
        return res.status(200).json(response);
    }


    const postoneget = async (req, res) => {
        const newPost = new CRUD(req.params.id);
        const response = await newPost.oneget();
        return res.status(200).json(response);
    }

    const postpatch = async (req, res) => {
        const newPost = new CRUD(req);
        const response = await newPost.update();
        return res.status(200).json(response);
    }
>>>>>>> 3b3be12f95fc0bc234982188c568aeb2270a7462

    const postdelete = async (req, res) => {
        const newPost = new CRUD(req.params.id);
        const response = await newPost.delete();
        return res.json(response);
    }


module.exports = {
    posttodo,
    postget,
    postoneget,
    postpatch,
    postdelete,
};

