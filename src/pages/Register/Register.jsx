import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { apiDomain } from "../../Utils/utils";

import './Register.css';

const schema = yup.object().shape({
  FullName: yup.string().required("Full name is required"),
  UserName: yup.string().required("Username is required"),
  Email: yup.string().email("Invalid email").required("Email is required"),
  Password: yup.string().required("Password is required"),
  PhoneNumber: yup
    .string()
    .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number")
    .required("Phone number is required"),
});

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    axios.post(`${apiDomain}/auth/register`, data)
      .then((response) => {
        response.data.message && alert(response.data.message);
        navigate("/login");      
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <h1>Registration page</h1>
      <div>
        <label>Full Name</label>
        <input type="text" {...register("FullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <label>Username</label>
        <input type="text" {...register("UserName")} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register("Email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("Password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Phone Number</label>
        <input type="text" {...register("PhoneNumber")} />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>

      <button type="submit">Submit</button>
      <p>Already have an account <Link to='/login'>Login</Link></p>
    </form>
  );
};
