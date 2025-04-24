# FortuneSnake Microservice (WE LIVE + APISYS)

This microservice handles game session launching and wallet syncing between APISYS and WE LIVE (iframe-based game provider) using seamless wallet integration.

## Project Structure

├── src/
│ ├── index.js # Service entrypoint (Express server)
│
│ ├── routes/
│ │ ├── launch.js # Handles GET /launch (session + redirect logic)
│ │ ├── callback.js # Handles POST /game/bet, /game/win, /game/rollback
│
│ ├── services/
│ │ ├── walletClient.js # Handles debit, credit, rollback with APISYS
│ │ ├── sessionManager.js # Calls APISYS to get launch URL
│
│ ├── utils/
│ │ ├── logger.js # Central logging utility
│ │ ├── retry.js # Generic retry logic for failed API calls
│ │ ├── apiClient.js # Axios instance with default headers
│
├── test/
│ ├── callback.test.js # Unit tests for /game/bet, /game/win
│ ├── session.test.js # Unit tests for /launch and sessionManager
│
├── .env
├── Dockerfile # For containerizing this service
├── helm/
│ └── deployment.yaml
├── README.md # How to deploy, test, use the API
├── package.json

```
/fortune-snake-welive
├── src/
│   ├── index.js               # Entry point
│   ├── routes/                # Routes (launch + callback)
│   ├── services/              # APISYS wallet/session clients
│   ├── utils/                 # Logger, retry, axios config
├── .env                       # Local env config
├── Dockerfile                # Container definition
├── helm/deployment.yaml      # Kubernetes Helm chart
```

## Setup

```bash
git clone gitlab-url
cd fortune-snake-welive
npm install
npm run dev
```

## API Endpoints

| Method | Route            | Description                 |
| ------ | ---------------- | --------------------------- |
| GET    | `/launch`        | Get game URL from APISYS    |
| POST   | `/game/bet`      | Notify APISYS to debit      |
| POST   | `/game/win`      | Notify APISYS to credit win |
| POST   | `/game/rollback` | Notify APISYS to rollback   |

## Environment `.env`

```env
PORT=3000
APISYS_BASE_URL=https://stg-api.789fin.com
APISYS_TOKEN=74EvTNiljJiiVgF8uwghxTNuv9KwhCKEfsv5YKqPbDcL5KSlyfawfzqxN0aHNFmI
GAME_KEY=fortune-snake
MERCHANT_ID=0531
```

## Dockerfile

```Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=production

CMD ["node", "src/index.js"]
```

---
