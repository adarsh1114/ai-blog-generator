# ✦ AI Blog Generator

> Transform any topic into a beautifully structured blog article in seconds — powered by OpenAI GPT, React, and Express.

---

## 📸 Preview

A clean, editorial-style UI with:
- Topic input + tone selector (Professional / Casual / Technical)
- Skeleton loading animation while the AI writes
- Rendered markdown output with word count
- One-click copy button

---

## 🗂 Project Structure

```
ai-blog-generator/
├── backend/
│   ├── routes/
│   │   └── blog.js          # POST /api/generate-blog route
│   ├── services/
│   │   └── openai.js        # OpenAI API call + prompt
│   ├── server.js            # Express app entry point
│   ├── .env.example         # Environment variable template
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BlogForm.jsx     # Topic input + tone selector
│   │   │   └── BlogResult.jsx   # Rendered blog + copy button
│   │   ├── App.jsx              # Root component + API call
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Tailwind + custom styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## ⚙️ Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- An **OpenAI API key** → [platform.openai.com](https://platform.openai.com)

---

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-blog-generator.git
cd ai-blog-generator
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create your `.env` file:

```bash
cp .env.example .env
```

Edit `.env`:

```env
OPENAI_API_KEY=sk-your-openai-api-key-here
PORT=5000
```

Start the backend:

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Backend runs at: `http://localhost:5000`

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create your `.env` file:

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend runs at: `http://localhost:3000`

---

## 🔌 API Reference

### `POST /api/generate-blog`

Generates a blog article using the OpenAI GPT API.

**Request Body:**

```json
{
  "topic": "Artificial Intelligence in Healthcare",
  "tone": "Professional"
}
```

| Field   | Type   | Required | Values                              |
|---------|--------|----------|-------------------------------------|
| `topic` | string | ✅       | Any blog topic                      |
| `tone`  | string | ✅       | `Professional`, `Casual`, `Technical` |

**Response:**

```json
{
  "blog": "## Introduction\n\nArtificial intelligence is transforming..."
}
```

**Error Response:**

```json
{
  "error": "Topic and tone are required."
}
```

---

## ☁️ Deployment

### Backend → Render

1. Push the project to GitHub
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:**
     - `OPENAI_API_KEY` = your key
     - `PORT` = `5000`
5. Click **Deploy**
6. Copy your Render URL (e.g., `https://ai-blog-backend.onrender.com`)

---

### Frontend → Vercel

1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repository
3. Configure:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Environment Variables:**
     - `VITE_API_URL` = your Render backend URL + `/api`
       (e.g., `https://ai-blog-backend.onrender.com/api`)
4. Click **Deploy**

---

## 🛠 Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React 18, Vite, Tailwind CSS |
| HTTP      | Axios                   |
| Markdown  | react-markdown          |
| Backend   | Node.js, Express.js     |
| AI        | OpenAI GPT-3.5 Turbo    |
| Config    | dotenv                  |

---

## 📦 npm Scripts

### Backend

| Command       | Description                    |
|---------------|--------------------------------|
| `npm start`   | Start production server        |
| `npm run dev` | Start dev server with nodemon  |

### Frontend

| Command         | Description                |
|-----------------|----------------------------|
| `npm run dev`   | Start Vite dev server      |
| `npm run build` | Build for production       |
| `npm run preview` | Preview production build |

---

## 🔒 Environment Variables

### Backend (`backend/.env`)

```env
OPENAI_API_KEY=sk-...       # Your OpenAI secret key
PORT=5000                   # Server port (optional, default 5000)
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000/api   # Backend API URL
```

> ⚠️ Never commit `.env` files to version control. They are listed in `.gitignore`.

---

## 📄 License

MIT — feel free to use, modify, and build on this project.
