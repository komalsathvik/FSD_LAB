import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name);
    console.log(password);
    try {
      const res = await axios.post("http://localhost:9000/login", {
        username: name,
        password: password,
      });
      console.log(res);
      console.log(res.data.success);
      if (res.data.success == true) {
        console.log("true");
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setData("incorrect password");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div style={{ maxWidth: 380, margin: "40px auto", padding: 16 }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label htmlFor="name">User name</label>
            <br />
            <input
              id="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", padding: 8 }}
            />
          </div>

          <div style={{ marginBottom: 12 }}>
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: 8 }}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <br></br>
          <p style={{ color: "red" }}>{data}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
