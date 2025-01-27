import { useState } from "react";
import { axiosInstance } from "../../config/axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") setUsername(value);
    if (id === "password") setPassword(value);
  };

  const handleClick = async () => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await axiosInstance.post("api/auth/login", {
        username,
        password,
      });

      // Handle successful login
      console.log("Login successful:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data)); // Save user data
      window.location.href = "/home"; // Redirect to home page
    } catch (err) {
      // Handle login error
      setError(err.response?.data?.message || "Login failed. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
          required
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
          required
        />
        <button
          disabled={isFetching}
          onClick={handleClick}
          className="lButton"
        >
          {isFetching ? "Loading..." : "Login"}
        </button>
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default Login;