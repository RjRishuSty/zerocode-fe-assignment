# 🧠 ZeroCode Frontend Engineer Assignment

This is a chatbot web application built for the ZeroCode Frontend Engineer Assignment. It includes secure authentication, real-time chat UI, light/dark theme support, voice input, and the ability to export chat history — all built using modern frontend technologies.

## 🔗 Live Demo

[Vercel Deployment](https://zerocode-fe-assignment-black.vercel.app/)

## 📁 Repository

[GitHub Repo](https://github.com/RjRishuSty/zerocode-fe-assignment)

---

## 🚀 Features

### 🔐 Authentication
- Register, Login, Logout flows
- Token-based dummy authorization using `localStorage`

### 💬 Chat Interface
- Real-time message flow (simulated)
- Auto-scroll, input history, loading indicators
- New chat creation and history tracking

### 🎤 Voice Input
- Real-time voice-to-text input via Web Speech API

### 📁 Chat Export
- Export chat history to downloadable text files

### 🌗 Theme Support
- Toggle between Light and Dark mode (persisted)

---

## ⚙️ Tech Stack

- **React 19**
- **Vite 6**
- **MUI (Material UI 7)**
- **@mui/icons-material**
- **React Router v7**
- **Notistack** – for snackbars/toasts
- **Web Speech API** – for voice input
- **ESLint + Prettier** – for code consistency
- **Emotion** – for styling with MUI

> ⚠️ Note: Although Tailwind CSS was suggested in the assignment, Material UI was used instead for faster prototyping and built-in accessibility support.

---

## 🧠 Challenges Faced

### 🎤 Voice Input with Web Speech API
- Handling browser compatibility and microphone permissions
- Managing continuous speech recognition inside React components
- Debouncing input to prevent unwanted extra triggers
- Syncing results with input box in real time

### 📁 Chat Export
- Structuring chat history in a clean and readable format
- Ensuring consistent and smooth file download across browsers
- Isolating export logic into clean, reusable utility functions

---

## 📂 Project Structure

Chat-bot-App/
│
├── public/ # Static files
├── src/ # All source code
│ ├── components/ # Reusable UI components (ChatBox, InputBar, etc.)
│ ├── context/ # Chat context for managing global state
│ ├── hooks/ # Custom hooks (useVoiceInput)
│ ├── pages/ # Route-based views (Login, Register, Chat)
│ ├── utils/ # Utility functions (chat export, theme, auth)
│ └── App.jsx # Root component
│
├── index.html
├── package.json



---

## 🧪 Setup & Run Locally

```bash
# Clone the repository
git clone https://github.com/RjRishuSty/zerocode-fe-assignment.git
cd zerocode-fe-assignment/Chat-bot-App

# Install dependencies
npm install

# Start the development server
npm run dev
