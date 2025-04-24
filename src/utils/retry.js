// src/utils/retry.js
export default async function retry(fn, retries = 3) {
  while (retries--) {
    try {
      return await fn();
    } catch (err) {
      if (!retries) throw err;
    }
  }
}
