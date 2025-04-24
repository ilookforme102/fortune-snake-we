// src/routes/callback.js
import express from "express";
import walletClient from "../services/walletClient.js";

const router = express.Router();

router.post("/bet", async (req, res) => {
  try {
    const response = await walletClient.debit(req.body);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/win", async (req, res) => {
  try {
    const response = await walletClient.settle(req.body);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/rollback", async (req, res) => {
  try {
    const response = await walletClient.rollback(req.body);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
