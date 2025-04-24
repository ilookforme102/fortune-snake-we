// src/services/walletClient.js
import apiClient from "../utils/apiClient.js";

async function debit({
  user_id,
  currency,
  amount,
  parent_wager_no,
  wager_no,
  metadata,
}) {
  const { GAME_KEY } = process.env;
  const res = await apiClient.post("/api/internal/v1/payment/request", {
    game_key: GAME_KEY,
    user_id,
    currency,
    amount: -Math.abs(amount),
    parent_wager_no,
    orders: [
      {
        wager_no,
        amount,
        metadata: JSON.stringify(metadata),
      },
    ],
  });
  return res.data;
}

async function settle({ wager_no, currency, amount, metadata }) {
  const { GAME_KEY } = process.env;
  const res = await apiClient.post("/api/internal/v1/wager/bulkSettle", [
    {
      game_key: GAME_KEY,
      wager_no,
      currency,
      amount,
      metadata: JSON.stringify(metadata),
    },
  ]);
  return res.data;
}

async function rollback({ game_key, wager_no, metadata }) {
  const res = await apiClient.post("/api/internal/v1/wager/cancel", {
    game_key,
    wager_no,
    metadata: JSON.stringify(metadata),
  });
  return res.data;
}

export default { debit, settle, rollback };
