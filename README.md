# 🏙️ Crowdsourced-Civic-Issue-Reporting-and-Resolution-System
A professional, automated civic reporting and triage system. Supports both high-speed citizen report filing and entirely automated Google Gemini Visual dispatching.

## 🌟 Key Features

### 📸 Frictionless Citizen Reporting
Snap and submit civic incidents directly from the web app.
Automatically captures GPS longitude/latitude for pinpoint accuracy.
Simple image upload—no manual 'categorization' needed by the citizen.

### 🧠 Google Gemini Visual Intelligence
Uploads are routed straight to `@google/genai` (Gemini 2.5 Flash).
Automatically detects the target **Department** (e.g. Sanitation, Transportation).
Performs a deep forensic analysis to extract **Damage Intensity** (e.g. 8/10).

### 🚦 Autonomous Triage & Dispatch
Generates a hyper-professional PDF containing AI forensics and the raw image using `pdfkit`.
Automatically dispatches an [URGENT] email to the relevant department using `nodemailer`.
Fail-safe fallback simulation activates automatically if the API key is rate-limited.

### 🗺️ Live Heatmap Command Center
Interactive `React-Leaflet` map displaying active pins of city-wide issues.
Dynamic list filtering (view 'Pending' vs 'Resolved', or filter by specific 'Department').
One-click access to download official PDF reports & view dispatch logs natively from the cards.

## 🚀 Installation & Setup
### 1. Install Dependencies
```bash
npm install
```
### 2. Configure Environment
Add your Google Gemini API Key into a `.env` file at the root:
```env
GEMINI_API_KEY="your_api_key_here"
```
*(If you do not add an API key, the system safely falls back to offline simulated heuristic analysis)*

### 3. Initialize Database
```bash
npx prisma generate
npx prisma db push
```

### 4. Run the Application
```bash
npm run dev
```
Open your browser and navigate to: `http://localhost:3000`

## 🛠️ Usage Workflow

### Step 1 — Citizen Reporting (/report)
Navigate to `http://localhost:3000/report`
Fill in the description of the event.
Click **Get GPS** to capture exact location coords.
Click **Upload** to attach the raw picture.
Click **Submit Report** → AI takes over!

### Step 2 — Municipal Triage (/admin)
Navigate to `http://localhost:3000/admin`
Dashboard will populate with all incidents dynamically mapped by category.
Review the AI's forensic report ("✨ AI Visual Intelligence").
Click **📄 View PDF** to officially download the incident report.
Click **📧 Dispatch Log** to view the raw test-email sent to the Government.

## 📁 Project Structure
```text
Hackathon/
├── src/app/              # Next.js App Router (Citizen & Admin views)
├── src/app/api/          # NodeJS Backend (Next.js serverless functions)
├── src/lib/gemini.ts     # Google Gemini SDK & Prompts
├── src/lib/pdfGenerator.ts  # Node.js PDF Document Builder
├── src/lib/dispatcher.ts # Nodemailer + Ethereal Dispatch Engine
├── prisma/schema.prisma  # SQLite Database Schema
├── next.config.ts        # Next.js / Turbopack External configs
└── README.md             # This file
```

## 🔮 Future Scope
- **SMS Alerts:** Notify citizens when their municipal complaint status changes to 'Resolved'.
- **Resident Accounts:** Auth checks utilizing Clerk to track specific user complaint history.
- **Biometric Backup:** Face Recognition logic so Municipal officers can seamlessly sign into the operations center.
- **Drone Interfacing:** Pass exact GPS coords directly to municipal inspection drones.