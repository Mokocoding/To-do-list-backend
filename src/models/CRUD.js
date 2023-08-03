"use strict";
const PostCRUD = require("./PostCRUD");


class CRUD {
    constructor(body) {
        this.body = body;
    }

    static async error(post) {
        if (!post.description) {
            return { success: false, msg: "body값이 정확하지 않습니다."};
        }
        if (!post.target_date) {
            return { success: false, msg: "body값이 정확하지 않습니다."};
        }
        if (post.target_date.length !== 10) {
            return { success: false, msg: "target_date의 값의 길이가 맞지 않습니다. "};
        }
        if (post.description.length === 0) {
            return { success: false, msg: "description의 값이 비어있습니다."};
        }
        return { success: true };
    }

    async post() {

        const post = this.body;

        try {
            const error = await CRUD.error(post);
            if (error.success) {
            const result = await PostCRUD.postcreate(post);
            const response = await PostCRUD.postoneget(result[0].insertId);
            if (result[0].affectedRows) {
            return response;
            }
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
            if ( typeof(Number(post)) === "number") {
                const response = await PostCRUD.postoneget(post);
                return response;
                
            }
            return { success: false, msg: "게시글 번호가 number type이 아닙니다."};
        } 
        catch (err) {
            return { success: false, msg: err };
        }
    }

    async update() {

        const post = this.body;

        try {
            if (!post.body.description) {
                return { success: false, msg: "body값이 정확하지 않습니다."};
            }
            if (!post.body.target_date) {
                return { success: false, msg: "body값이 정확하지 않습니다."};
            }
            if (post.body.target_date.length !== 10) {
                return { success: false, msg: "target_date의 값의 길이가 맞지 않습니다. "};
            }
            if (post.body.description.length === 0) {
                return { success: false, msg: "description의 값이 비어있습니다."};
            }
            const result = await PostCRUD.postupdate(post);
            const response = await PostCRUD.postoneget(post.params.id);
            if (result[0].affectedRows) {
                return response;
            }
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

}

module.exports = CRUD;