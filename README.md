# CampaignOS Deployment (Vercel + Railway)

## Structure
- frontend → deploy on Vercel
- backend → deploy on Railway
- worker → Railway service
- scheduler → Railway service

## Steps

### 1. Deploy Backend (Railway)
- Create project → Deploy from GitHub → select /backend
- Add ENV variables from backend/.env.example

### 2. Add Redis
- Railway → Add Redis → copy REDIS_URL

### 3. Deploy Worker
- New service → same repo → start command:
  node worker/index.js

### 4. Deploy Scheduler
- New service → start command:
  node scheduler/index.js

### 5. Deploy Frontend (Vercel)
- Import repo → select /frontend
- Add ENV:
  NEXT_PUBLIC_API_URL=https://your-backend-url

### 6. Done 🚀"# campaign-os" 
