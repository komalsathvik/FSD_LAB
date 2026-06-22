import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login submitted", { name, password });
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

          <button type="submit" style={{ padding: "10px 14px" }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
