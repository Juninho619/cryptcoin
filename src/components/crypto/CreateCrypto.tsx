"use client";
import { createCrypto } from "@/service/crypto";
import { cryptoCreationProps } from "@/utils/types";
import { schema } from "@/validations/validationCryptoForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function CreateCrypto() {
  const { push } = useRouter();
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm<cryptoCreationProps>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: cryptoCreationProps) => {
    console.log(data);

    try {
      createCrypto(data).then((res: any) => {
        if (res.status === 201) {
          if (typeof window !== "undefined") {
            window.localStorage.setItem("token", res.data.access_token);
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
    }
  };

  return (
    <div>
      {" "}
      <div className='flex justify-center bg-#9ca3af '>
        <div className='w-full max-w-xs'>
          <form
            className='bg-#9ca3af shadow-md rounded px-8 pt-6 pb-8 mb-4 '
            onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='first name'>
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                {...register("name", {
                  required: "field is mandatory",
                })}
              />
              {errors?.name && (
                <p className='text-red-500'>{errors.name.message}</p>
              )}
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='value'>
                Value
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='value'
                type='text'
                placeholder=''
                {...register("value", {
                  required: "field is mandatory",
                })}
              />
              {errors?.value && (
                <p className='text-red-500'>{errors.value.message}</p>
              )}
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='quantity'>
                Quantity
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='quantity'
                type='text'
                placeholder=''
                {...register("quantity", {
                  required: "field is mandatory",
                })}
              />
              {errors?.quantity && (
                <p className='text-red-500'>{errors.quantity.message}</p>
              )}
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='image'>
                Image
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='age'
                type='text'
                placeholder=''
                {...register("image", {
                  required: "field is mandatory",
                })}
              />
              {errors?.image && (
                <p className='text-red-500'>{errors.image.message}</p>
              )}
            </div>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'>
              Create
            </button>
          </form>
          <p className='text-center text-gray-500 text-xs'></p>
        </div>
      </div>
    </div>
  );
}

export default CreateCrypto;
