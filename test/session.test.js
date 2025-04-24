// test/session.test.js
import request from "supertest";
import app from "../src/index.js";

describe("/launch route", () => {
  it("should return a redirect_url when user_token is provided", async () => {
    const res = await request(app)
      .get("/launch")
      .query({ user_token: "fake_token_123" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("redirect_url");
  });

  it("should return 500 if user_token is missing or invalid", async () => {
    const res = await request(app).get("/launch");
    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty("error");
  });
});
