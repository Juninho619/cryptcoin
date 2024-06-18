"use client";
import { getAllPromo, updatePromoCode } from "@/service/promoCode";
import { promoCodeProps } from "@/utils/types";
import { Box, Modal } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

function PromoCard() {
  const [promoList, setPromoList] = useState<promoCodeProps[]>();
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");

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

  function handleUpdatePromo() {
    updatePromoCode(id)
      .then((res) => {
        alert("success");
        handleClose();
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getAllPromo()
      .then((res) => {
        console.log(res);
        setPromoList(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "A",
      headerName: "Id",
      width: 350,
      renderCell: (params) => {
        return <p>{params.row.id}</p>;
      },
    },

    {
      field: "B",
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        return <p>{params.row.name}</p>;
      },
    },

    {
      field: "C",
      headerName: "value",
      width: 150,
      renderCell: (params) => {
        return <p>{params.row.value}</p>;
      },
    },
    {
      field: "D",
      headerName: "Update",
      width: 150,
      renderCell: (params) => {
        return (
          <button id={params.row.id} onClick={handleOpen}>
            Update
          </button>
        );
      },
    },
    {
      field: "E",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return <button id={params.row.id}>Delete</button>;
      },
    },
  ];
  return (
    <div className='w-full'>
      {promoList && promoList.length > 0 && (
        <DataGrid
          rows={promoList}
          columns={columns}
          style={{ minHeight: "100vh", width: "100%" }}
        />
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <input
            type='text'
            onChange={(e) => {
              setName(e.target.value);
            }}
            className='text-black indent-3 border-2 border-black  w-full'
            placeholder='e.g: PROMO1000'
            required
          />

          <input
            type='text'
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
            className='text-black indent-3 border-2 border-black  w-full'
            placeholder='543'
            required
          />

          <div className='flex items-center'>
            <button
              onClick={handleClose}
              className='bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 '>
              Cancel
            </button>
            <button
              className='bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 '
              onClick={() => {
                handleUpdatePromo();
              }}>
              Update
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default PromoCard;
