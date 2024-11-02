import React from 'react'
import { useForm } from 'react-hook-form'
import "./style/forget.css";
import "./style/login.css";
const ChangePassword = () => {
    const{
register,
formState:{errors},
handleSubmit,
watch,

    }=useForm()
  return (
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
        
  )
}

export default ChangePassword