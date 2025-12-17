import React, { useState } from "react";
import "./login.css";

function LoginSignup() {
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();  
    if (login) {
      alert("Login successful (UI only)");
    } else {
      alert("Signup successful (UI only)");
    }
  };

  return (
    <div className="auth-container d-flex">
      <div className="auth-card">
        <h2>{login ? "Login" : "Signup"}</h2>

        <form onSubmit={handleSubmit}>
          {!login && (
            <input type="text" placeholder="Full Name" className="input-box" />
          )}

          <input type="email" placeholder="Email" className="input-box" />
          <input type="password" placeholder="Password" className="input-box" />

          {!login && (
            <input type="password" placeholder="Confirm Password" className="input-box" />
          )}

          <button className="btn-submit" type="submit">
            {login ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="toggle-text">
          {login ? "Don't have an account?" : "Already have an account?"}
          <span className="toggle-link" onClick={() => setLogin(!login)}>
            {login ? " Signup" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
