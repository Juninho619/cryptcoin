import { updatePromoCode } from '@/service/promoCode';
import { updatePromoCodeProps } from '@/utils/types';
import { schema } from '@/validations/validationUpdatePromo';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Modal } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdOutlineEdit } from "react-icons/md";


function UpdatePromoModal({ promoId }: { promoId: string }) {
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm<updatePromoCodeProps>({
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

  const onSubmitUpdate = (data: updatePromoCodeProps) => {
    console.log(data);
    try {
      updatePromoCode(data, promoId).then((res: any) => {
        if (res.status === 200) {
          if (typeof window !== "undefined") {
            toast.success('Successfully edited');
            window.location.reload()
          }
        }
        if (res.status !== 200) {
          const response = res.status;
          toast.error(response);
        }
      });
    } catch (error: any) {
      console.log(error);
      setError("root", {
        type: "manual",
        message: error.response.data.message,
      });
      toast.error(error);
    }
  };

  const { push } = useRouter();

  return (
    <div>
      <button
        onClick={handleOpen}
        className='bg-emerald-700 text-center rounded-lg text-white w-20 p-1 text-sm mt-1'>
        Edit
        <MdOutlineEdit />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <form
          className='bg-#9ca3af shadow-md rounded px-8 pt-6 pb-8 mb-4 '
          onSubmit={handleSubmit(onSubmitUpdate)}>
          <Box sx={style}>
            <span>Name</span>
            <input
              type='text'
              className='text-black indent-3 border-2 border-black  w-full'
              placeholder='PROMO'
              {...register("name", {
                required: "field is mandatory",
              })}
            />
            <span>Value</span>
            <input
              type='number'
              className='text-black indent-3 border-2 border-black  w-full'
              placeholder='value'
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
                onClick={() => {
                  setTimeout(handleClose, 1000);
                }}
                className='bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 '
                type='submit'>
                Edit
              </button>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
}

export default UpdatePromoModal;
