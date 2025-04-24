// test/callback.test.js
import request from "supertest";
import app from "../src/index.js";

describe("/game routes", () => {
  describe("POST /game/bet", () => {
    it("should process a bet and return 200", async () => {
      const res = await request(app)
        .post("/game/bet")
        .send({
          user_id: 12345,
          currency: "VND",
          amount: 100,
          wager_no: "WAGER123",
          parent_wager_no: "PARENT123",
          metadata: { round: 1 },
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
    });
  });

  describe("POST /game/win", () => {
    it("should process a win and return 200", async () => {
      const res = await request(app)
        .post("/game/win")
        .send({
          wager_no: "WAGER123",
          currency: "VND",
          amount: 150,
          metadata: { round: 1 },
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
    });
  });

  describe("POST /game/rollback", () => {
    it("should process a rollback and return 200", async () => {
      const res = await request(app)
        .post("/game/rollback")
        .send({
          game_key: "fortune-snake",
          wager_no: "WAGER123",
          metadata: { reason: "manual test" },
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
    });
  });
});
