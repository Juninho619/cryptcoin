import { buyOffer } from "@/service/trade";
import { tradeProps } from "@/utils/types";
import { Box, Modal } from "@mui/material";
import { schema } from "@/validations/validationCryptoForm";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CreateTrade() {
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm<tradeProps>({
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
  const [tradeId, setTradeId] = useState<tradeProps>();

  function handleUpdateOffer() {
    buyOffer(tradeId)
      .then((res) => {
        alert("success");
        handleClose();
      })
      .catch((e) => console.log(e));
  }
  return (
    <div>
      <button
        onClick={handleOpen}
        className='bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1'>
        Update{" "}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <input
          type='text'
          onChange={(e) => e.target.value}
          {...register("tradeId", {
            required: "field is mandatory",
          })}
        />
        <Box sx={style}>
          <div className='flex items-center'>
            <button
              className='bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 '
              onClick={() => {
                handleUpdateOffer();
              }}>
              Update
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateTrade;
