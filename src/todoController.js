"use strict";
const db = require("./config/db");
const CRUD = require("./models/PostStorages");

    const posttodo = (req, res) => {
    const post = new CRUD(req.body);
    const response = CRUD.todopost(post);
    return res.json(response);

        // const query = "INSERT INTO posts SET ?";

        // const { description, target_date } = req.body;

        // db.query(query, { description, target_date },
        //     (err, result) => {
        //         const post = {
        //             "id": result.insertId,
        //             "description": description,
        //             "target_date": target_date,
        //         };
        //         if (err) return res.json(err);
        //         return res.status(201).json(post);
        //     });
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

