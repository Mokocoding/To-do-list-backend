"use strict";
<<<<<<< HEAD

const PostCRUD = require("./PostCRUD");

=======
const PostCRUD = require("./PostCRUD");


>>>>>>> 3b3be12f95fc0bc234982188c568aeb2270a7462
class CRUD {
    constructor(body) {
        this.body = body;
    }

    async post() {
<<<<<<< HEAD
=======

>>>>>>> 3b3be12f95fc0bc234982188c568aeb2270a7462
        const post = this.body;
        try {
            const response = await PostCRUD.postcreate(post); 
            console.log(response);
            return response;
<<<<<<< HEAD
        }   catch (err) {
=======
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
>>>>>>> 3b3be12f95fc0bc234982188c568aeb2270a7462
            return { success: false, msg: err };
        }
    }
}

module.exports = CRUD;