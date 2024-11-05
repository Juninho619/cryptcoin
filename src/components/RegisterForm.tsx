"use client";
import { registerUser } from "@/service/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { authProps } from "@/utils/types";
import { schema } from "@/validations/validationForm"
import toast from "react-hot-toast";

// {...register("first_name", {required:"ce champs est obligatoire",minLength:{value:5, message:"minimum 5 caracteres"}})}

// regex email
// /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

function RegisterForm() {
  const { push } = useRouter();

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm<authProps>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: authProps) => {
    console.log(data);

    try {
      registerUser(data).then((res: any) => {
        if (res.status === 201) {
          if (typeof window !== "undefined") {
            window.localStorage.setItem("token", res.data.access_token);
            toast.success('Successfully created an account')
            push("/crypto");
          }
        }
      });
    } catch (error: any) {
      console.log(error);
      setError("root", {
        type: "manual",
        message: error.response.data.message,
      });
      toast.error('Failed to create an account')

    }
  };
  return (
    <div className='flex justify-center bg-[#ccccff] '>
      <div className='w-full max-w-xs'>
        <h1>Sign up</h1>
        <form
          className='bg-#9ca3af shadow-xl rounded px-8 pt-6 pb-8 mb-4 '
          onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='first name'>
              First name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='first-name'
              type='text'
              placeholder='Rocke'
              {...register("firstName", {
                required: "field is mandatory",
                minLength: {
                  value: 4,
                  message: "Should be at least 4 characters",
                },
              })}
            />
            {errors?.firstName && (
              <p className='text-red-500'>{errors.firstName.message}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='last-name'>
              Last name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='last-name'
              type='text'
              placeholder='Feller'
              {...register("lastName", {
                required: "field is mandatory",
                minLength: {
                  value: 4,
                  message: "Should be at least 4 characters",
                },
              })}
            />
            {errors?.lastName && (
              <p className='text-red-500'>{errors.lastName.message}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='pseudo'>
              Pseudo
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='pseudo'
              type='text'
              placeholder='HollerIfURich'
              {...register("pseudo", {
                required: "field is mandatory",
                minLength: {
                  value: 4,
                  message: "Should be at least 4 characters",
                },
              })}
            />
            {errors?.pseudo && (
              <p className='text-red-500'>{errors.pseudo.message}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='last-name'>
              Age
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='age'
              type='number'
              placeholder='185'
              {...register("age", {
                required: "field is mandatory",
              })}
            />
            {errors?.age && (
              <p className='text-red-500'>{errors.age.message}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='city'>
              City
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='city'
              type='text'
              placeholder='Chambéry'
              {...register("city", {
                required: "field is mandatory",
                minLength: {
                  value: 4,
                  message: "Should be at least 4 characters",
                },
              })}
            />
            {errors?.city && (
              <p className='text-red-500'>{errors.city.message}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='rocke@feller.com'
              {...register("email", {
                required: "Email is mandatory",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors?.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
              {...register("password", {
                required: "field is mandatory",
                minLength: {
                  value: 4,
                  message: "Should be at least 4 characters",
                },
              })}
            />
            {errors?.password && (
              <p className='text-red-500'>{errors.password.message}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='promoCode'>
              Promo code
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='promocode'
              type='text'
              placeholder='e.g: PROMO1000'
              {...register("promoCode", {
                minLength: {
                  value: 2,
                  message: "Should be at least 2 characters",
                },
              })}
            />
            {errors?.promoCode && (
              <p className='text-red-500'>{errors.promoCode.message}</p>
            )}
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'>
            Sign Up
          </button>
        </form>
        <p className='text-center text-gray-500 text-xs'></p>
      </div>
    </div>
  );
}

export default RegisterForm;
