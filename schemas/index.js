const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb://localhost:27017/2nd_mini").catch((err) => {
        console.log("db 연결 에러", err);
    });
};
module.exports = connect;
