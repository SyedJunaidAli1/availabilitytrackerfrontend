# 🎨 Frontend – Mentoring Call Scheduling System

This is a minimal frontend built using **React (Vite)** to demonstrate the core workflow of the mentoring scheduling system.

---

# 🚀 Overview

The frontend focuses on the **Admin workflow**, which is the core of the system:

* Login as Admin
* View Users
* Get Mentor Recommendations
* Book Calls

⚠️ Note:
User and Mentor availability is managed via backend APIs (tested using Postman for simplicity).

---

# 🧠 Design Approach

This frontend is intentionally kept:

* ✅ Simple
* ✅ Functional
* ✅ Focused on core product flow

The goal is to demonstrate:

> End-to-end scheduling logic rather than UI complexity

---

# 🛠 Tech Stack

* React (Vite)
* Axios
* Tailwind CSS (basic styling)

---

# ⚙️ Setup Instructions

## 1. Install Dependencies

```bash
npm install
```

---

## 2. Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 3. Run Frontend

```bash
npm run dev
```

App runs on:

```bash
http://localhost:5173
```

---

# 🔐 Login Credentials

## Admin (Primary Role)

```text
admin@test.com
123456
```

---

## (Optional – for testing APIs)

```text
mentor1@test.com / 123456
user1@test.com / 123456
```

---

# 🎯 Features Implemented

* 🔐 Admin Login with JWT
* 👥 View Users
* 🤖 Get Mentor Recommendations
* 📞 Book Call with one click
* 🔄 Persistent login (refresh safe)
* 🚪 Logout functionality

---

# 📅 Booking Flow (Demo)

1. Login as Admin
2. Select a User
3. Click **"Match"** to get recommended mentors
4. Click **"Book"** to schedule a call

---

# ⚠️ Important Note (Testing)

For successful booking:

* Availability must exist for both user & mentor
* Overlapping time slots are required

👉 Pre-tested scenario:

```text
User 1 + Mentor 1 → Matching availability
```

---

# 🧠 Backend Integration

The frontend communicates with backend APIs using Axios:

* `/api/auth/login`
* `/api/admin/users`
* `/api/admin/recommendations/:userId`
* `/api/admin/book-call`

---

# 🎯 Scope Decision

This frontend focuses only on **Admin functionality** because:

* Admin controls the booking process
* Core logic lies in recommendation & scheduling
* Keeps implementation fast and focused

---

# 🚀 Future Improvements

* User dashboard (availability UI)
* Mentor dashboard
* Better UI/UX
* Notifications / email system

---

# 🏁 Status

✅ Functional
✅ Integrated with backend
✅ Ready for demo / submission
