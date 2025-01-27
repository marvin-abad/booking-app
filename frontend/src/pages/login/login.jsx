
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../axios/axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/api/auth/login", credentials);
      
      if (res.data.details) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/home");
      } else {
        throw new Error("No user details received");
      }
    } catch (err) {
      dispatch({ 
        type: "LOGIN_FAILURE", 
        payload: err.response?.data || "Login failed" 
      });
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
        {error && <span className="error">{error.message || "An error occurred"}</span>}
      </div>
    </div>
  );
}