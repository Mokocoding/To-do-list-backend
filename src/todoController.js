"use strict";
const CRUD = require("./models/CRUD");
const memo = require("./models/memo");

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

    const todomemo = async (req, res) => {
        const newPost = new memo(req.body);
        const response = await newPost.memo();
        return res.json(response);
    }

    const getmemo = async (req, res) => {
        const newPost = new memo();
        const response = await newPost.memoget();
        return res.json(response);
    }

    const onegetmemo = async (req, res) => {
        const newPost = new memo(req.params.id);
        const response = await newPost.memooneget();
        return res.status(200).json(response);
    }

    const memopatch = async (req, res) => {
        const newPost = new memo(req);
        const response = await newPost.memoupdate();
        return res.status(200).json(response);
    }

    const memodelete = async (req, res) => {
        const newPost = new memo(req.params.id);
        const response = await newPost.memodelete();
        return res.json(response);
    }



module.exports = {
    posttodo,
    postget,
    postoneget,
    postpatch,
    postdelete,
    todomemo,
    getmemo,
    onegetmemo,
    memopatch,
    memodelete,
};
