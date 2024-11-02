import React, { useState } from "react";
import "./style/forget.css";
import "./style/login.css";
import { useForm } from "react-hook-form";

const Forgetpage = ({ handleForget }) => {
  const [passwordPage, setPasswordPage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMesage] = useState("");

  const handlePasswordPage = () => {
    setPasswordPage(!passwordPage);
  };
  const {
    register,
    formState: { errors, isSubmitting },
    setError,
    handleSubmit,
    watch,
  } = useForm();
  const delay = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time * 1000);
    });
  };
  const handleSubmitOne = async (data) => {
    setLoading(true);
    await delay(2);
    const getUser = JSON.parse(localStorage.getItem("user_info"));
    const checkUser = getUser.find((e) => e.username === data.username);
    if (checkUser) {
      handlePasswordPage();
    } else {
      setError("userExits", { message: "User not Exits" });
    }
    setLoading(false);
  };
  const handleSubmitTwo = async (data) => {
    setLoading(true);
    await delay(3);
    const saveData = JSON.parse(localStorage.getItem("user_info"));
    const changePassword = saveData.map((item) => {
      if (item.username === data.username) {
        return { ...item, password: data.password };
      }
      return item;
    });
    localStorage.setItem("user_info", JSON.stringify(changePassword));
    setLoading(false);
    setMesage("Password Change Successfully.");
    await delay(2);
    setMesage("");
    handleForget();
  };
  return (
    <div className="Forgetpage ">
      <div className="forget-conatiner container">
       {
        loading ?  <center>
        {isSubmitting ? <div className="loading-form"></div> : ""}
      </center>:""
       }
        <div className="success">{message ? <p>{message}</p> : ""}</div>
        <form
          onSubmit={handleSubmit(
            passwordPage ? handleSubmitTwo : handleSubmitOne
          )}
        >
          <div className="input-form">
            <label htmlFor="">Enter Your Username</label>
            <input
              type="text "
              placeholder="Username "
              {...register("username", {
                required: { value: true, message: "Username is required" },
              })}
              readOnly={passwordPage ? true : false}
            />
            {passwordPage ? (
              <>
                <label htmlFor="">Enter New Username</label>

                <input
                  type="password "
                  placeholder="New Password "
                  {...register("password", {
                    required: { value: true, message: "Username is required" },

                    minLength: {
                      value: 8,
                      message: "Password minimun length is 8",
                    },
                  })}
                />

                <input
                  type="cpassword "
                  placeholder="Confrim Password "
                  {...register("cpassword", {
                    required: { value: true, message: "Username is required" },
                    minLength: {
                      value: 8,
                      message: "Password minimun length is 8",
                    },
                    validate: (value) =>
                      value === watch("password") || "Password Does Not Macth",
                  })}
                />
              </>
            ) : (
              ""
            )}

            {passwordPage ? (
              <button type="submit" disabled={isSubmitting}>
                Confirm
              </button>
            ) : (
              <button type="submit">Check User</button>
            )}
          </div>
        </form>
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

            {errors.userExits && (
              <li className="red">{errors.userExits.message}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Forgetpage;
