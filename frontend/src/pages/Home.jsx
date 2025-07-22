import { useState, useEffect } from "react";
import API from "../api";
import { Link } from "react-router-dom";
export const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const res = await API.get("/");
      if (res.status !== 200) throw new Error("Failed to fetch expenses");

      setExpenses(res.data.Expenses);
    } catch (err) {
      setError({ error: err });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this expense?")) return;
    try {
      await API.delete(`/${id}`);
      setExpenses(expenses.filter((exp) => exp._id !== id));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (error) return <p className="text-center mt-10">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Expense List</h1>
      <Link
        to="/add"
        className="bg-yellow-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        + Add Expense
      </Link>
      {expenses.length === 0 ? (
        <p className="text-center">No expenses found.</p>
      ) : (
        <ul className="space-y-4">
          {expenses.map((exp) => (
            <li
              key={exp._id}
              className="border rounded p-4 flex justify-between items-center bg-yellow-100"
            >
              <div>
                <p className="font-semibold">{exp.title}</p>
                <p className="text-sm text-gray-500">
                  Amount: Rs. {exp.amount} | Date:{" "}
                  {new Date(exp.date).toLocaleDateString()}
                </p>
              </div>
              <div className="space-x-2">
                <Link
                  to={`/edit/${exp._id}`}
                  className="text-blue-500 border border-blue-500 px-2 py-1 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(exp._id)}
                  className="text-red-500 border border-red-500 px-2 py-1 rounded cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
