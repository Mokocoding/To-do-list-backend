"use strict";
const PostCRUD = require("./PostCRUD");


class CRUD {
    constructor(body) {
        this.body = body;
    }

    async post() {
        const post = this.body;
        // const error = error(post);
        try {
            const result = await PostCRUD.postcreate(post);
            const response = await PostCRUD.postoneget(result[0].insertId);
            if (result[0].affectedRows) {
            return response;
            }
            return { success: false, msg: "게시글 생성에 실패했습니다." };
        }   
        catch (err) {
            throw err;
        }
    }

    async get() {

        try {
            const response = await PostCRUD.postget();
            return response;
        }   
        catch (err) {
            return { success: false, msg: err };
        }
    }

    async oneget() {

        const post = this.body;

        try {
            const response = await PostCRUD.postoneget(post);
            return response;
        } 
        catch (err) {
            return { success: false, msg: err };
        }
    }

    async update() {

        const post = this.body;

        try {
            const response = await PostCRUD.postupdate(post);
            console.log(response);
            return response;
        } 
        catch (err) {
            return { success: false, msg: err };
        }
    }

    async delete() {

        const post = this.body;

        try {
            const response = await PostCRUD.postdelete(post);
            return response;
        } 
        catch (err) {
            return { success: false, msg: err };
        }
    }

    // error (post) {
    //     console.log(post.description);
    //     return success;
    //     if (post.description === null) {
    //             throw err;
    //     }
    //     if (post.target_date.length === null)
    //     if (!af어쩌구) {
    //         return { statusCode : (123)}
    //     } 
    // }
}

module.exports = CRUD;