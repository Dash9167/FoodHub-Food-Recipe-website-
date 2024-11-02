import React,{useEffect} from "react";
import "./style/login.css";
import { useForm } from "react-hook-form";

const Login = ({ handleRegister, HandleLandingpage, handleForget }) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
   clearErrors,
    setError,
  } = useForm();
  useEffect(() => {
    return 
  }, [])
  
  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onsubmit = async (data) => {
    clearErrors()
    await delay(2);

    const savedData = JSON.parse(localStorage.getItem("user_info")) || [];
    const foundUser = savedData.find((e) => e.username === data.Username);

    if (!foundUser) {
      // If the username does not exist
      setError("Username", { message: "Invalid Username" });
    } else if (foundUser.password !== data.Password) {
      // If the password does not match
      setError("Password", { message: "Invalid Password" });
    } else {
      // If both username and password match
      console.log("Login success", foundUser);
      HandleLandingpage(); // Navigate to the landing page
    }

   
  };

  return (
    <div className="login-page">
      <div className="container">
        {isSubmitting && (
          <center>
            <div className="loading-form"></div>
          </center>
        )}
        {/* {userExit && (
          <center>
            <div className="login-confirm">Login Successfully</div>
          </center>
        )} */}

        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="input-form">
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Username or Email"
              {...register("Username", {
                required: { value: true, message: "Uername is required" },
                minLength: {
                  value: 8,
                  message: "Username minimun length  is 8",
                },
              })}
            />
          </div>
          <div className="input-form">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              {...register("Password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 8,
                  message: "Password minimun Length is 8",
                },
              })}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <div className="register">
            <p onClick={handleForget}>Forget Password ?</p>
            <p onClick={handleRegister}>Register here ?</p>
          </div>
          <div className="login-message">
            <ul>
              {errors.Username && (
                <li>
                  {" "}
                  <h3 className="red">{errors.Username.message}</h3>
                </li>
              )}

              {errors.Password && (
                <li>
                  {" "}
                  <h3 className="red">{errors.Password.message}</h3>
                </li>
              )}
             
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
