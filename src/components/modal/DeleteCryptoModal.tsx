import { deleteCrypto } from '@/service/crypto';
import { Box, Modal } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { CiTrash } from 'react-icons/ci';

function DeleteCryptoModal({cryptoId}: {cryptoId : string}) {
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
    <div> <div>  
    <button
      onClick={handleOpen}
      className='bg-red-700 text-center rounded-lg text-white w-20 p-1 text-sm mt-1'>
      Delete{" "}
      <CiTrash />
    </button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
        <Box sx={style}>
        <div>
            <p>Are you sure? This action is irreversible</p>
            <div className='flex items-center'>
            <button
                onClick={handleClose}
                className='bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 '>
                Cancel
              </button>
              <button
               onClick={() => {
                deleteCrypto(cryptoId)
                  .then((res) => {
                    if (res.status === 204) {
                      toast.success("Successfully deleted!");
                      handleClose()
                
                    }
                  })
                  .catch((e) => {
                    toast.error('Nope')
                    console.log(e);                  
                    handleClose()
                  });
              }}
                className='bg-blue-700 text-white rounded-md text-center w-32 p-2 m-4 '
                type='submit'>
                Delete
              </button>
              </div>
            </div>
        </Box>
        </Modal>
      </div>
    </div>
  )
}
  

export default DeleteCryptoModal