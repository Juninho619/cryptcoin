"use client";
import { loginUser } from "@/service/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function login() {
  function handleSubmit() {
    if (!email || !password) setError("All fields are mandatory");
    else {
      let loginCredentials = {
        email: email,
        password: password,
      };
      try {
        loginUser(loginCredentials).then((res: any) => {
          if (res.status === 200) {
            if (typeof window !== "undefined") {
              window.localStorage.setItem("token", res.data.access_token);
              push("/crypto");
            }
          }
        });
      } catch (e) {
        console.log("error", e);

        setError("Credentials taken");
      }
    }
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { push } = useRouter();
  return (
    <div>
      <div className='w-full max-w-xs'>
        <h1>Sign in</h1>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='rocke@mail.com'
              onChange={(e) => setEmail(e.target.value)}
            />
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={() => {
                handleSubmit();
              }}>
              Sign In
            </button>
            <a
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
              href='#'>
              Forgot Password?
            </a>
          </div>
        </form>
        <p className='text-center text-gray-500 text-xs'></p>
      </div>
    </div>
  );
}

export default login;
