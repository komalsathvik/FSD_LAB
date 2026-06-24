import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Student App
      </Link>
      <div className="navbar-nav ms-auto">
        <NavLink className="nav-link" to="/display#students">
          View Students
        </NavLink>
        <NavLink className="nav-link" to="/display#students">
          Edit Students
        </NavLink>
        <NavLink className="nav-link" to="/display#form">
          Add Student
        </NavLink>
        {isLoggedIn ? (
          <button className="btn btn-link nav-link" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
