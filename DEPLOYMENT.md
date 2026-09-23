# EduTech Hub — Azure App Service Deployment Guide

## What's Configured

| File | Purpose |
|------|---------|
| `package.json` → `"start"` | Serves `dist/` on port 8080 via `serve` |
| `public/web.config` | IIS SPA routing (copied into `dist/` at build) |
| `.github/workflows/azure-app-service.yml` | GitHub Actions CI/CD pipeline |

---

## Step-by-Step: Deploy to Azure App Service

### Step 1 — Push Code to GitHub

```bash
cd C:\Users\Zemaity\.gemini\antigravity-ide\scratch\edutechhub

git init
git add .
git commit -m "EduTech Hub for Teachers - initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/edutechhub.git
git push -u origin main
```

---

### Step 2 — Create App Service in Azure Portal

1. Go to **[portal.azure.com](https://portal.azure.com)**
2. Click **"Create a resource"** → search **"Web App"**
3. Click **"Create"**

Fill in the form:

| Field | Value |
|-------|-------|
| **Subscription** | Your subscription |
| **Resource Group** | Create new → `edutechhub-rg` |
| **Name** | `edutechhub-teachers` *(must be globally unique)* |
| **Publish** | **Code** |
| **Runtime stack** | **Node 20 LTS** |
| **Operating System** | **Linux** *(recommended)* |
| **Region** | Closest to your users |
| **Pricing Plan** | **Free F1** (or B1 for production) |

4. Click **"Review + create"** → **"Create"**

> Wait ~1 minute for the resource to provision.

---

### Step 3 — Get the Publish Profile

1. In Azure Portal → go to your new App Service
2. In the left menu → **"Overview"**
3. Click **"Download publish profile"** → saves a `.PublishSettings` file
4. Open the file in a text editor → **copy the entire contents**

---

### Step 4 — Add GitHub Secrets

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**:

| Secret Name | Value |
|-------------|-------|
| `AZURE_WEBAPP_NAME` | `edutechhub-teachers` *(your App Service name)* |
| `AZURE_WEBAPP_PUBLISH_PROFILE` | *(paste the full publish profile XML content)* |

---

### Step 5 — Trigger Deployment

The workflow runs automatically on every push to `main`.

**To deploy now:**
```bash
git commit --allow-empty -m "Trigger deployment"
git push
```

Or go to GitHub → **Actions** → your workflow → **"Run workflow"**

---

### Step 6 — Configure Startup Command (Linux)

In Azure Portal → your App Service → **Configuration** → **General settings**:

- **Startup Command**: `npm start`

Click **"Save"** and then **"Restart"**.

> [!IMPORTANT]
> This tells Azure to run `npm start` which executes `serve -s dist -l 8080` to serve your built React app.

---

### Step 7 — Your Site is Live! 🎉

URL: `https://edutechhub-teachers.azurewebsites.net`

---

## Custom Domain (Optional)

1. Azure Portal → App Service → **"Custom domains"**
2. Add your domain
3. Update DNS: Add a CNAME pointing to `edutechhub-teachers.azurewebsites.net`
4. Enable **"App Service Managed Certificate"** (free SSL)

---

## Local Development

```bash
# Dev server with hot reload
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Test production build locally (same as Azure will run)
npm start
# → http://localhost:8080
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| App shows blank page | Check startup command is set to `npm start` |
| 404 on page refresh | `web.config` in `dist/` handles IIS rewrite rules |
| Build fails in Actions | Check Node 20 is selected in App Service runtime |
| Port errors | Azure App Service uses `WEBSITES_PORT` env var — `serve -l 8080` handles this |

---

## Files Reference

```
edutechhub/
├── .github/
│   └── workflows/
│       └── azure-app-service.yml   ← CI/CD pipeline
├── public/
│   └── web.config                  ← IIS SPA routing rules
├── src/
│   ├── data/
│   │   ├── tools.ts                ← 100+ tool definitions
│   │   ├── prompts.ts              ← Prompt library
│   │   └── translations.ts         ← EN + AR i18n
│   ├── contexts/
│   │   ├── LanguageContext.tsx     ← RTL switching
│   │   └── ThemeContext.tsx        ← Dark/light mode
│   ├── hooks/
│   │   └── useFilterState.ts       ← URL-synced filters
│   └── components/
│       ├── Header.tsx
│       ├── FilterSection.tsx
│       ├── ToolCard.tsx
│       ├── ToolGrid.tsx
│       ├── HomeCategoryNav.tsx
│       ├── PromptLibrarySection.tsx
│       ├── AIAgentsSection.tsx
│       └── Footer.tsx
├── package.json                    ← "start": "serve -s dist -l 8080"
├── vite.config.ts
└── index.html
```
