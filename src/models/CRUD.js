"use strict";
const PostCRUD = require("./PostCRUD");


class CRUD {
    constructor(body) {
        this.body = body;
    }

    async post() {

        const post = this.body;
        try {
            const response = await PostCRUD.postcreate(post); 
            console.log(response);
            return response;
        }   
        catch (err) {
            return { success: false, msg: err };
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
}

module.exports = CRUD;