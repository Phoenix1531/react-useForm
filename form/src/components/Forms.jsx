import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {
    const { register, handleSubmit,formState: { errors,isSubmitSuccessful} } = useForm()
    const FormSubmitHandler = (data) => {
        toast("Form successful",{theme:"dark"})
        console.log(data)
    }
    return (
        <div className='form-container'>
            <ToastContainer />
            <fieldset>
                <legend>Fill This Form</legend>
                <form onSubmit={handleSubmit(FormSubmitHandler)}>
                    {isSubmitSuccessful && <div className='success'>
                        <p>Registration Successful</p>
                    </div> }
                    <label>First Name : </label>
                    <input type="text" name='firstName' {...register("firstName", {
                        required: "Fill Firstname", minLength: { value: 4, message: "minimum 4 char required" },maxLength:{value:8,message:"Maximum 8 chars only"}
                    })} />
                    <p className='err'>{errors.firstName?.message} </p>
                    <label>Last Name : </label>
                    <input type="text" name='lastName' {...register("lastName", {
                        required: "Fill Lastname", minLength: { value: 4, message: "minimum 4 char required" }
                    })} />
                    <p className='err'>{errors.lastName?.message} </p>
                    
                    <label>Email : </label>
                    <input type="email" name='email' {...register("email", {
                        required: "Enter email"
                    })} />
                    <p className='err'>{errors.email?.message} </p>

                    <label>Password : </label>
                    <input type="password" name='password' {...register("password", {
                        required: "Fill Password", minLength: { value: 8, message: "minimum 8 char required" }
                    })} />
                    <p className='err'>{errors.password?.message} </p>
                   
                    <input type="submit" value={"Register"} />
                </form>
            </fieldset>
        </div>
    )
}

export default Forms