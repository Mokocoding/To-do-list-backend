// "use strict";

// const db = require("../config/db");

// const posttodo = (req, res) => {
//     const query = "INSERT INTO posts SET ?";

//     const { id, description } = req.body;

//     db.query(query, { id, description },
//         (err, result) => {
//             if (err) return res.json(err);
//             result = { "id": id,
//                         "description" : description
//         }
//             return res.status(200).json(result);
//         });
//     }

// module.exports = posttodo;