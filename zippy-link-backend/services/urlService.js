const shortid = require('shortid');
const Url = require("../models/Url"); 

const createShortUrl = async (longUrl) => {
    if (!longUrl) {
        throw new Error("Invalid URL");
    }

    // Check if the URL already exists
    let urlEntry = await Url.findOne({ longUrl });

    if (urlEntry) return `http://localhost:5000/${urlEntry.shortUrl}`;

    // Generate Short URL
    const shortUrl = shortid.generate();
    const newUrl = new Url({ longUrl, shortUrl });
    await newUrl.save();

    return `http://localhost:5000/${shortUrl}`;
};

const getLongUrl = async (shortUrl) => {
    return await Url.findOne({ shortUrl });
};

module.exports = { createShortUrl, getLongUrl };
