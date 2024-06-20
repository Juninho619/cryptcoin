import { createOffer } from "@/service/offer";
import { OffersProps } from "@/utils/types";
import { schema } from "@/validations/validationOfferForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const CreateOffer = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm<OffersProps>({
    mode: "all",
    // @ts-expect-error ts(2322)
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: OffersProps) => {
    console.log(data);

    try {
      createOffer(data).then((res: any) => {
        if (res.status === 201) {
          if (typeof window !== "undefined") {
            window.localStorage.setItem("token", res.data.access_token);
            push("/offer");
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
    <div className='flex justify-center bg-#9ca3af '>
      <div className='w-full max-w-xs'>
        <form
          className='bg-#9ca3af shadow-md rounded px-8 pt-6 pb-8 mb-4 '
          onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='first name'>
              Crypto Id
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='first-name'
              type='text'
              placeholder='756d4d5e-b775-4a0d-a4ef-90592d97028f'
              {...register("id", {
                required: "field is mandatory",
              })}
            />
            {errors?.id && <p className='text-red-500'>{errors.id.message}</p>}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='amount'>
              Amount
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='amount'
              type='number'
              placeholder='23'
              {...register("amount", {
                required: "field is mandatory",
              })}
            />
            {errors?.amount && (
              <p className='text-red-500'>{errors.amount.message}</p>
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
  );
};

export default CreateOffer;
