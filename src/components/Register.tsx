"use client";
import { registerUser } from "@/service/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");
  const { push } = useRouter();

  function handleSubmit() {
    if (!firstName || !lastName || !pseudo || !city || !email || !password) {
      setError("All fields are mandatory");
    } else {
      let registerData = {
        firstName: firstName,
        lastName: lastName,
        pseudo: pseudo,
        city: city,
        email: email,
        password: password,
        promoCode: promoCode,
      };
      try {
        registerUser(registerData).then((res: any) => {
          if (res.status === 201) {
            if (typeof window !== "undefined") {
              window.localStorage.setItem("token", res.data.access_token);
              push("/");
            }
          }
        });
      } catch (e) {
        console.log("error", e);

        setError("Credentials taken");
      }
    }
  }
  return (
    <div className='flex justify-center bg-#9ca3af '>
      <div className='w-full max-w-xs'>
        <form className='bg-#9ca3af shadow-md rounded px-8 pt-6 pb-8 mb-4 '>
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
              onChange={(e) => setfirstName(e.target.value)}
            />
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
              onChange={(e) => setlastName(e.target.value)}
            />
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
              onChange={(e) => setPseudo(e.target.value)}
            />
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
              onChange={(e) => setCity(e.target.value)}
            />
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
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={() => {
                handleSubmit();
              }}>
              Sign Up
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
};
export default Register;
