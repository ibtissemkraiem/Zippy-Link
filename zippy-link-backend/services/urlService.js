const shortid = require("shortid");
const Url = require("../models/Url"); 
const base_url = process.env.BASE_URL;

const createShortUrl = async (longUrl) => {
    if (!longUrl) {
        throw new Error("Invalid URL");
    }

    // Check if the URL already exists
    let urlEntry = await Url.findOne({ longUrl });

    if (urlEntry) return `${base_url}/${urlEntry.shortUrl}`;

    // Generate Short URL
    const shortUrl = shortid.generate();
    const newUrl = new Url({ longUrl, shortUrl });
    await newUrl.save();

    return `${base_url}/${shortUrl}`;
};

const getLongUrl = async (shortUrl) => {
    return await Url.findOne({ shortUrl });
};

module.exports = { createShortUrl, getLongUrl };
