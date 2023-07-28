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
        }   catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = CRUD;