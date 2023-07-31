"use strict";

const express = require("express");
const router = express.Router();

const { posttodo, postget, postoneget, postpatch, postdelete } = require("./todoController");


router.get("/post", (req,res) => {
    res.send("글작성 공간");
});

router.post("/posts", posttodo);
router.get("/posts", postget);
router.get("/posts/:id", postoneget);
router.patch('/posts/:id', postpatch);
router.delete('/posts/:id', postdelete);







module.exports = router;