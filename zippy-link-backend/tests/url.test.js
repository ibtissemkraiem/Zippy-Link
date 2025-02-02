const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const urlController = require("../controllers/urlController");
require("dotenv").config();

const app = express();
app.use(express.json());
app.post("/shorten", urlController.shortenUrl);
app.get("/:shortUrl", urlController.redirectUrl);

beforeAll(async () => {
    jest.setTimeout(30000);
  
    if (!process.env.MONGO_URI) {
      throw new Error(" MONGO_URI is not set in .env file");
    }
  
    await mongoose.connect(process.env.MONGO_URI);
  });

afterAll(async () => {
 await mongoose.connection.close();
});

describe("✅ URL Shortener API Tests", () => {
 it("✔️ Should create a shortened URL", async () => {
 const response = await request(app).post("/shorten").send({
 longUrl: "https://www.google.com",
 });

 expect(response.status).toBe(200);
 expect(response.body).toHaveProperty("shortUrl");
 });

 it("✔️ Should return 404 for a non-existent short URL", async () => {
 const response = await request(app).get("/nonexistent");
 expect(response.status).toBe(404);
 });

 it("✔️ Should handle invalid URL input", async () => {
 const response = await request(app).post("/shorten").send({
 longUrl: "invalid-url",
 });

 expect(response.status).toBe(400);
 expect(response.body.error).toBe("Invalid URL format");
 });
});