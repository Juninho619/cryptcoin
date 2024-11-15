import { buyOffer } from '@/service/trade';
import { Box, Modal } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const BuyFromOfferModal = ({offerId}: {offerId: string}) => {
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

  return (
    <div><div>
    <button
      onClick={handleOpen}
      className='bg-emerald-700 text-center rounded-lg text-white w-20 p-1 text-sm mt-1'>
      Buy{" "}
    </button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
        <Box sx={style}>
        <div>
            <p>Are you sure?</p>
            <div className='flex items-center'>
            <button
                onClick={handleClose}
                className='bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 '>
                Cancel
              </button>
              <button
               onClick={() => {
                buyOffer(offerId)
                  .then((res) => {
                    if (res.status === 201) {
                      toast.success("Successfully bought!");
                      push('/offer')
                    }
                  })
                  .catch((e) => {
                    toast.error('Nope')
                    console.log(e);
                  console.log({'id': offerId,});
                  console.log({});
                  
                    handleClose()
                  });
              }}
                className='bg-emerald-700 text-white rounded-md text-center w-32 p-2 m-4 '
                type='submit'>
                Buy
              </button>
              </div>
            </div>
        </Box>
        </Modal>
      </div>
    </div>
  )
}

export default BuyFromOfferModal