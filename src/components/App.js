import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [user, setUser] = useState({ names: "", password: "" });
  let [error, setError] = useState("");

  function login() {
    if (user.names === "" || user.password === "")
      setError("Both username and password are required.");
    else setError("");
  }
  return (
    <div>
      Username:
      <input
        type="text"
        onChange={(e) => setUser({ ...user, names: e.target.value })}
      />
      Password:
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      {error && <p id="errorMessage">{error}</p>}
      <button onClick={login}>Login</button>
    </div>
  );
};

export default App;
