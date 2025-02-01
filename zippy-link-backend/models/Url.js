const mongoose = require("mongoose")


const UrlSchema = new mongoose.Schema(
    {
        longUrl:{type:String, required:true},
        shortUrl:{type:String, required:true, unique:true},
    }
);

module.exports = mongoose.model("Url", UrlSchema)