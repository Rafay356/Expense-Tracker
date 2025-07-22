import { ExpenseForm } from "../components/ExpenseForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api";

export const AddExpense = () => {
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    amount: "",
    date: new Date().toISOString().split("T")[0], // Format date as YYYY-MM-DD
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await API.post("/", values);
      if (res.status === 201 || res.status === 200) {
        resetForm();
        navigate("/");
      } else {
        setSubmitError("Failed to add expense");
      }
    } catch (error) {
      console.error(error);
      setSubmitError("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-yellow-200 rounded shadow shadow-amber-300">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Expense</h1>
      <ExpenseForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        submitError={submitError}
      />
    </div>
  );
};
