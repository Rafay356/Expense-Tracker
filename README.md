# 💸 Expense Tracker

A modern React-based Expense Tracker App for managing and tracking daily expenses with ease. Built with React, React Router, Tailwind CSS, and Yup for form validation.

---

## 🚀 Features

- ✅ Add new expenses with validation
- 📝 Edit and update existing expenses
- 🗑️ Delete unwanted expenses
- 📅 Date picker for selecting expense date
- 📁 Organized project structure using `pages` and `components`
- 🧪 Yup validation schema for form handling
- ✅ CRUD operations: Manage expenses with Create, Read, Update, Delete functionality.
- 📝 Backend validation: Enforced using Yup for robust data integrity.
- Frontend form validation: Implemented with Formik + Yup for a polished user experience.
- Routing: Client-side routing handled by React Router (Home, Add Expense, Edit Expense).
- Theming: Theme context integration for styling consistency.

---

## 🚀 Prerequisites

- Node.js (v22.17.0)
- npm
- MongoDB (local or Atlas)

## 📦 Tech Stack

- **Frontend:** React, React Router DOM, Tailwind CSS
- **Validation:** Yup
- **State Management:** React Context API
- **Routing:** `react-router-dom`

---

## 🔧 Installation

    1. Clone the repository

    git clone https://github.com/Rafay356/Expense-Tracker.git
    cd Expense-Tracker

    2. Backend setup
    cd backend
    npm install
    # Update MongoDB URI and PORT in `.env`
    npm run dev

    3.Frontend setup
    cd ../frontend
    npm install
    npm run dev
    # Opens on http://localhost:5173

## 📂 Project Structure

Expense-Tracker/
├── backend/
│ ├── models/Expense.js # Mongoose schema & validation
│ ├── routes/expenses.js # CRUD routes using Express
│ ├── validations/ # Request validation with Yup
│ └── server.js # Express app configuration
|
├── frontend/
│ ├── src/
│ │ ├── api.js # Axios configuration
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ └── ExpenseForm.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── AddExpense.jsx
│ │ │ └── EditExpense.jsx
│ │ ├── context/ # ThemeContext and usage
│ │ ├── App.jsx # Router setup
│ │ └── main.jsx # Application entry point
|
└── README.md # Project overview and instructions

## ⚙️ Backend Overview

- Schemas & models: Mongoose schema defines title, amount, date with validation.

- Routes: GET /, POST /, PUT /:id, PATCH /:id, DELETE /:id.

- Validation: Request body validated using Yup schemas to enforce data integrity.

- Error handling: Structured error outputs including validation issue details.

# 🎨 Frontend Overview

- Routing: Handled via React Router (Home, Add, and Edit pages).

- Forms: Built with Formik + Yup; ExpenseForm component handles both add and edit functionality.

- Theme: Shared styles using React Context (ThemeContext).

- API communication: Axios instance configured; centralized HTTP methods to backend.

# ✅ Usage

1. View expenses on the Home page.

2. Add new entries using the Add Expense form.

3. Edit entries via the Edit Expense form.

4. Delete items directly from the list.

5. Frontend validation ensures valid input before submitting; backend validation ensures data integrity.

## 📚 Further Reading

- [Yup Validation Docs](https://github.com/jquense/yup)

- [Formik Form Handling](https://formik.org/)

- [Express.js Guide](https://expressjs.com/)

- [React Context API](https://react.dev/reference/react/useContext)

# 🧑‍💻 Author

Made with ❤️ by Abdul Rafay
