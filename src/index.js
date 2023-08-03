"use strict";

const express = require("express");
const router = express.Router();

const { posttodo, postget, postoneget, postpatch, postdelete, todomemo, getmemo, onegetmemo, memopatch, memodelete } = require("./todoController");

router.post("/posts", posttodo);
router.get("/posts", postget);
router.get("/posts/:id", postoneget);
router.patch('/posts/:id', postpatch);
router.delete('/posts/:id', postdelete);

router.post("/memos", todomemo);
router.get("/memos", getmemo);
router.get("/memos/:id", onegetmemo);
router.patch("/memos/:id", memopatch);
router.delete("/memos/:id", memodelete);








module.exports = router;