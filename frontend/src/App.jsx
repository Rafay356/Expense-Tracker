import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, AddExpense, EditExpense } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-2xl mt-10">404 - Not Found</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
