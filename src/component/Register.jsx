import React, { useState } from "react";

import "./style/register.css";
import "./style/login.css";
import { useForm } from "react-hook-form";

const Register = ({ handleRegister }) => {
  const [message, setMesage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    setError,
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmitForm = async (data) => {
    setLoading(true)
    await delay(3);

    const getData = JSON.parse(localStorage.getItem("user_info")) || [];
    const updateData = [...getData, data];
    localStorage.setItem("user_info", JSON.stringify(updateData));

    const exitUSer = getData.find((e) => e.username === data.username);
    if (exitUSer) {
      setError("exitUser", {
        message: "Username is already exits! Try another .",
      }
    
    );
    return
    }
setLoading(false)
setMesage("Successfully Registered")
await delay(2)
    reset();
    handleRegister();
  };

  return (
    <div className="register-page">
      <div className="container">
        {isSubmitting && (
          loading?<center>
          <div className="loading-form"></div>
        </center>:""
        )}
       <div className="success">
       {
          message?<p>{message}</p>:""
        }
       </div>

        <form action="" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="input-form">
            <label htmlFor="">Create Username</label>
            <input
              type="text"
              placeholder="Create Username"

              {...register("username", {
                required: { value: true, message: "Username is required" },
                minLength: {
                  value: 8,
                  message: "Minimum username lenght is 8",
                },
              })}
            />
          </div>
          <div className="input-form">
            <label htmlFor="">Create Password</label>
            <input
              type="password"
              placeholder="Confirm Password"

              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 8,
                  message: "Password minimum lenght is 8",
                },
              })}
            />
          </div>
          <div className="input-form">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter Password"

              {...register("cpassword", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 8,
                  message: "Password minimum lenght is 8",
                },
                validate: (value) =>
                  value === watch("password") || "Password not match",
              })}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
          <div className="register">
            <p className="h3" onClick={handleRegister}>Already registered ?</p>
          
          </div>
          <div className="login-message">
            <ul>
              {errors.username && (
                <li className="red">{errors.username.message}</li>
              )}
              {errors.password && (
                <li className="red">{errors.password.message}</li>
              )}
              {errors.cpassword && (
                <li className="red">{errors.cpassword.message}</li>
              )}
              {errors.exitUser && (
                <li className="red">{errors.exitUser.message}</li>
              )}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
