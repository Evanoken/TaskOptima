import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Login.css";
import axios from "axios"; // Import Axios
import { apiDomain } from "../../Utils/utils";

const loginSchema = yup.object().shape({
  UserName: yup.string().required("Username is required"),
  Password: yup.string().required("Password is required"),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${apiDomain}/auth/login`, data); // Update the API endpoint to match the backend login route
      const { UserID, UserName, Email, FullName, PhoneNumber, token } = response.data;
      localStorage.setItem("token", token);

      // Redirect to the dashboard or any authenticated page after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response.data); // Log the error response if login fails
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" {...register("UserName")} />
          {errors.UserName && <p className="error">{errors.UserName.message}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register("Password")} />
          {errors.Password && <p className="error">{errors.Password.message}</p>}
        </div>

        <button type="submit">Login</button>
        <p>Forgot Password <Link to='/forgotPassword'>Click here</Link></p>
      </form>
    </div>
  );
}
