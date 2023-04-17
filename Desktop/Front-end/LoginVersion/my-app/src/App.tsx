import * as React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {  toast } from 'react-toastify';
import Logo from '../src/logo-420-x-108.png'

import "./styles/form.css";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  example: string;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    toast("Successs!");
    
  }; 
  



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={Logo} alt="" />
      <label>Email</label>
      <input
        {...register("firstName", {
          required: 'Email is required',
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
          }
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "pattern" && (
        <p>Please enter a valid email</p>
      )}
      <label>Password</label>
      <input 
      {...register("lastName", { 
      required: true,
      minLength:4,
      pattern: /^[A-Za-z]+$/i })} />
      {errors?.lastName?.type === "required" && <p>This field is required</p>}
      {errors?.lastName?.type === "minLength" && <p>Please password again with min 4</p>}
      
      <input type="submit" />
    </form>
  );
}

export default App


