"use strict";

const app = require("../src/app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("서버 가동");
});