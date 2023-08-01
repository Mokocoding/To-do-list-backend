"use strict";
const CRUD = require("./models/CRUD");

    const posttodo = async (req, res) => {
        const newPost = new CRUD(req.body); 
        const response = await newPost.post()
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

