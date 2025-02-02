const request = require("supertest");
const Url = require("../models/Url");
require("dotenv").config();

const server = require("../server");
const mongoose = require('mongoose');

// Mock mongoose connect
jest.mock('mongoose', () => ({
  connect: jest.fn().mockResolvedValue({
    connection: {
      host: 'mockdb'
    }
  }),
  Schema: jest.fn(),
  model: jest.fn(() => ({
    save: jest.fn(), // Mock save method
    findOne: jest.fn(), // Mock findOne method
  }))
}));


describe("✅ URL Shortener API Tests", () => {
  beforeEach(() => {
    // Set test environment variables
    process.env.MONGO_URI = 'mongodb://mock:27017/test';
    process.env.PORT = 5000;
  });

  afterAll(() => {
    jest.restoreAllMocks();
    delete process.env.MONGO_URI;
    delete process.env.PORT;
    server.close();
  });

  beforeAll(async () => {
    jest.setTimeout(5000);

  });

  it("✔️ Should create a shortened URL", async () => {

    Url.findOne.mockImplementation((query) => {
      return { longUrl: "https://www.google.com", shortUrl: "short123" };
    });

    Url.save.mockImplementation(() => {
      return { longUrl: "https://www.google.com", shortUrl: "short123" };
    });

    const response = await request(server).post("/shorten").send({
      longUrl: "https://www.google.com",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("shortUrl");
  });

  it("✔️ Should return 404 for a non-existent short URL", async () => {
    Url.findOne.mockImplementation((query) => {
      return null
    });
    const response = await request(server).get("/nonexistent");
    expect(response.status).toBe(404);
  });

  it("✔️ Should handle invalid URL input", async () => {
    const response = await request(server).post("/shorten").send({
      longUrl: "invalid-url",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid URL format");
  });
});