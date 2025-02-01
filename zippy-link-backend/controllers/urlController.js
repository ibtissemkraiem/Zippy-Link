const urlService = require("../services/urlService");

const shortenUrl = async (req, res) => {
    try {
        const { longUrl } = req.body;
        console.log("Received Url:", longUrl);

        const shortUrl = await urlService.createShortUrl(longUrl);

        res.json({ shortUrl });
    } catch (error) {
        console.error("Shorten URL Error:", error.message); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const redirectUrl = async (req, res) => { 
    try {
        const { shortUrl } = req.params;
        const urlEntry = await urlService.getLongUrl(shortUrl);

        if (urlEntry) {
            return res.redirect(urlEntry.longUrl); 
        } else {
            return res.status(404).json({ error: "URL not found" });
        }
    } catch (error) {
        console.error("Redirect URL Error:", error.message); 
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    shortenUrl,
    redirectUrl, 
};
