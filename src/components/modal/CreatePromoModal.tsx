'use client'
import { createPromo } from '@/service/promoCode';
import { createPromoCodeProps } from '@/utils/types';
import { schema } from '@/validations/validationCreatePromo';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Modal } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function CreatePromoModal() {
    const {
        handleSubmit,
        setError,
        register,
        formState: { errors },
      } = useForm<createPromoCodeProps>({
        mode: "all",
        resolver: yupResolver(schema),
      });
      const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [amount, setAmount] = useState(0);
    
      const { push } = useRouter();

      const onSubmitCreatePromo = (data: createPromoCodeProps) => {
        console.log(data);
        try {
          createPromo(data).then((res: any) => {
            if (res.status === 201) {
              if (typeof window !== "undefined") {
                toast.success('Successfully created a new promo code')
                window.location.reload()
              }
            }
            if (res.status !== 201){
              const response = res.status
              toast.error(response)
            }
          });
        } catch (error: any) {
          console.log(error);
          setError("root", {
            type: "manual",
            message: error.response.data.message,
          });
          toast.error(error)
        }
      };
  return (
    <div>  <div>
    <button
      onClick={handleOpen}
      className='bg-black text-center rounded-lg text-white w-20 p-1 text-sm mt-1'>
      Create +{" "}
    </button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <form
        className='bg-#9ca3af shadow-md rounded px-8 pt-6 pb-8 mb-4 '
        onSubmit={handleSubmit(onSubmitCreatePromo)}>
        <Box sx={style}>
            <span>Name</span>
          <input
            type='text'
            className='text-black indent-3 border-2 border-black  w-full'
            placeholder='PROMOCODENAME'
            {...register("name", {
              required: "field is mandatory",
            })}
          />
             <span>Value</span>
          <input
            type='number'
            className='text-black indent-3 border-2 border-black  w-full'
            placeholder='e.g: 6'
            {...register("value", {
              required: "field is mandatory",
            })}
          />
            <div className='flex items-center'>
              <button
                onClick={handleClose}
                className='bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 '>
                Cancel
              </button>
              <button
              onClick={()=>{
                setTimeout(handleClose, 1000)
              }}
                className='bg-black text-white rounded-md text-center w-32 p-2 m-4 '
                type='submit'>
                Create
              </button>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  </div>
  )
}

export default CreatePromoModal