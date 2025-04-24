// src/services/sessionManager.js
import apiClient from "../utils/apiClient.js";

async function getLaunchUrl(user_token) {
  const { GAME_KEY, MERCHANT_ID } = process.env;
  const params = new URLSearchParams({
    user_token,
    game_key: GAME_KEY,
    merchant_id: MERCHANT_ID,
  });
  const res = await apiClient.get(
    `/api/${GAME_KEY}/internal/v1/redirect?${params.toString()}`
  );
  return res.data.data.redirect_url;
}

export default { getLaunchUrl };
