import { useState, useEffect } from "react";
import { ExpenseForm } from "../components/ExpenseForm";
import API from "../api";
import { useNavigate, useParams } from "react-router-dom";

export const EditExpense = () => {
  const [initialValues, setInitialValues] = useState(null);
  const [submitError, setSubmitError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const res = await API.get(`/${id}`);
        if (res.status === 200) {
          const expense = res.data.Expense;
          setInitialValues({
            title: expense.title,
            amount: expense.amount,
            date: expense.date.split("T")[0],
          });
        }
      } catch (err) {
        console.error("Failed to fetch expense", err);
        setSubmitError("Could not load expense data.");
      }
    };
    fetchExpense();
  }, [id]);

  const handleSubmit = async (values, { setSubmitting, setSubmitError }) => {
    try {
      const res = await API.put(`/${id}`, values);
      if (res.status === 200) {
        navigate("/");
      } else {
        setSubmitError({ submit: "Failed to update expense" });
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        Array.isArray(error.response.data.errors)
      ) {
        const backendErrors = {};
        error.response.data.errors.forEach((err) => {
          backendErrors[err.path] = err.message;
        });
        setSubmitError(backendErrors);
      } else {
        setSubmitError({ submit: "Something went wrong. Try again." });
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!initialValues) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-yellow-200 rounded shadow shadow-amber-300">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Expense</h1>
      <ExpenseForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        submitError={submitError}
      />
    </div>
  );
};
