import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate,Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Register.css'
const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  phoneNumber: yup
    .string()
    .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number")
    .required("Phone number is required"),
});

export default function Register () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
  
    <form onSubmit={handleSubmit(onSubmit)} className="container">
        <h1>Registration page</h1>
      <div>
        <label>Full Name</label>
        <input type="text" {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <label>Username</label>
        <input type="text" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Phone Number</label>
        <input type="text" {...register("phoneNumber")} />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>

      <button type="submit">Submit</button>
        <p>Already have an account <Link to='/login'>Login</Link></p>
    
    </form>
  );
};





