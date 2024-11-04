import { buyCrypto } from "@/service/crypto";
import { buyCryptoProps, cryptoProps } from "@/utils/types";
import { schema } from "@/validations/buyCryptoForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function BuyCryptoModal({ cryptoId }: { cryptoId: string }) {
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm<buyCryptoProps>({
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

  const onSubmitBuy = (data: buyCryptoProps) => {
    console.log(data);
    try {
      buyCrypto(data, cryptoId).then((res: any) => {
        if (res.status === 201) {
          if (typeof window !== "undefined") {
            toast.success('Successfully bought')
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
      toast.error(error)
    }
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className='bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1'>
        Buy{" "}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <form
          className='bg-#9ca3af shadow-md rounded px-8 pt-6 pb-8 mb-4 '
          onSubmit={handleSubmit(onSubmitBuy)}>
          <Box sx={style}>
            <input
              type='number'
              className='text-black indent-3 border-2 border-black  w-full'
              placeholder='how many tokens?'
              {...register("amount", {
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
                className='bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 '
                type='submit'>
                Buy
              </button>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
