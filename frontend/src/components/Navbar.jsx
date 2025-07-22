import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <NavLink to="/">Expense Tracker</NavLink>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) => {
                return isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300";
              }}
            >
              Add Expense
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/edit/:id"
              className={({ isActive }) => {
                return isActive
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : "hover:text-yellow-300";
              }}
            >
              Edit Expense
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
