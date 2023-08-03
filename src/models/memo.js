"use strict";
const memoCRUD = require("./memoCRUD");


class memo {
    constructor(body) {
        this.body = body;
    }

    static async error(post) {
        if (!post.comment) {
            return { success: false, msg: "body값이 정확하지 않습니다."};
        }
        if (post.comment.length === 0) {
            return { success: false, msg: "comment 값이 비어있습니다."};
        }
        return { success: true };
    }

    async memo() {

        const post = this.body;
        try {
            const error = await memo.error(post);

            if (error.success) {
                const result = await memoCRUD.postmemo(post);
                const response = await memoCRUD.memooneget(result[0].insertId);

                    if (result[0].affectedRows) {

                        return response;

                    }
        }
            return { success: false, msg: "게시글 생성에 실패했습니다." };
        }
        catch (err) {
            return { success: false, msg: err };
        }

    }

    async memoget() {
        
        try {
            const result = await memoCRUD.getmemo();
            return result;

        }
        catch (err) {
            return { success: false, msg: err };
        }
    }

    async memooneget() {

        const post = this.body;

        try {
            
            if ( typeof(Number(post)) === "number") {
                const response = await memoCRUD.memooneget(post);
                return response;
            }
            return { success: false, msg: "게시글 번호가 number type이 아닙니다."};
        } 
        catch (err) {
            return { success: false, msg: err };
        }
    }

    async memoupdate() {

        const post = this.body;

        try {
            if (!post.body.comment) {
                return { success: false, msg: "body값이 정확하지 않습니다."};
            }
            const result = await memoCRUD.memoupdate(post);
            const response = await memoCRUD.memooneget(post.params.id);
            if (result[0].affectedRows) {
                return response;
            }
        } 
        catch (err) {
            return { success: false, msg: err };
        }
    }

    async memodelete() {

        const post = this.body;

        try {
            const response = await memoCRUD.memodelete(post);
            return response;
        } 
        catch (err) {
            return { success: false, msg: err };
        }
    }

}

module.exports = memo;