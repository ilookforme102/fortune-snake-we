import express from "express";
import sessionManager from "../services/sessionManager.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { user_token } = req.query;
    const redirectUrl = await sessionManager.getLaunchUrl(user_token);
    res.json({ redirect_url: redirectUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
