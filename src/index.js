"use strict";

const express = require("express");
const router = express.Router();

const { posttodo, postget, postoneget, postpatch, postdelete } = require("./todoController");
<<<<<<< HEAD

router.get("/", (req, res) => {
    res.send("화이팅");
    //루트
});

router.get("/post", (req,res) => {
    res.send("글작성 공간");
});
=======
>>>>>>> 3b3be12f95fc0bc234982188c568aeb2270a7462

router.post("/posts", posttodo);
router.get("/posts", postget);
router.get("/posts/:id", postoneget);
router.patch('/posts/:id', postpatch);
router.delete('/posts/:id', postdelete);







module.exports = router;