# 🚀 Onboarding Tracker

An easy-to-use onboarding management system for HR teams to assign tasks and track new employees during their onboarding journey.

Built with:
- ⚛️ React for the Frontend (Admin + Employee Dashboards)
- 🐍 Flask for the Backend API (RESTful)
- ✅ Temporary in-memory storage *(no DB required!)* or ready for MySQL

---

## 📁 Project Structure

onboarding-tracker/
│
├── client/ # React frontend (Admin & Employee Dashboard)
│ ├── src/
│ │ ├── components/
│ │ └── context/
│ ├── public/
│ └── package.json
│
├── server/ # Flask backend (API)
│ ├── app.py
│ ├── routes/
│ ├── models.py
│ └── requirements.txt
│
└── README.md

text

---

## 💻 Features

### ✅ Admin Dashboard
- Add & delete employees
- Assign tasks with title + description
- See employee status (Pending, In Progress, Completed)
- View onboarding progress
- Manage tasks dynamically
- Clean UI with progress bars & responsive glassmorphism

### ✅ Employee Dashboard
- View assigned tasks
- Mark tasks as complete
- Track onboarding progress
- Light, responsive & modern UI

---

## ⚙️ Installation

### 🧩 Prerequisites
- Python 3.x
- Node.js and npm
- Optional: MySQL or just temporary memory

---

### 📦 Backend (Flask API)

cd server
pip install -r requirements.txt
python app.py

text

Runs on: `http://localhost:5001`

---

### 🌐 Frontend (React)

cd client
npm install
npm start

text

Runs on: `http://localhost:3000`

---

### 🌍 Proxy Setup (Optional)

In `client/package.json`, add:

"proxy": "http://localhost:5001"

text

Then use relative paths like `fetch("/api/tasks")`.

---

## 🧠 API Endpoints

Available from Flask (`http://localhost:5001`):

| Method | Endpoint                     | Description                     |
|--------|------------------------------|---------------------------------|
| GET    | `/api/employees`            | Get all employees with tasks    |
| POST   | `/api/employees`            | Add a new employee              |
| DELETE | `/api/employees/<emp_id>`   | Delete an employee              |
| GET    | `/api/tasks?emp_id=<id>`    | Get tasks for an employee       |
| POST   | `/api/tasks`                | Assign new task to employee     |
| PUT    | `/api/tasks/<task_id>`      | Toggle task complete/incomplete |

🔁 All data is in-memory unless MySQL is integrated.

---

## 🎨 Customizing

- Change `src/config.js` for centralized API URLs
- Add features like:
  - 🎯 Due dates
  - 🌈 Dark mode
  - 🛠️ Drag-and-drop tasks
  - 📬 Email notifications (with Flask or third-party)

---

## 🛠 Technologies Used

| Frontend        | Backend       |
|----------------|---------------|
| React (Vite/CRA) | Flask (Python) |
| React Hooks     | Flask-Restful |
| Context API     | flask-cors    |
| CSS Modules     | In-memory or MySQL |
| Glassmorphism UI | REST API design |

---

## 🧪 Testing it Locally

1. Create employees in `/api/employees`
2. Assign tasks per employee under `/api/tasks`
3. View Employee Dashboard in a separate route

💡 Tasks assigned on the admin side appear immediately under the employee login (mock logins for now).

---

## 📜 License

MIT License © 2024

---

## 🧑‍💻 Author

Made with 💙 by Saksham Bansal

---
