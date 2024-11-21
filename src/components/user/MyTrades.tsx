'use client'
import { displayMyTrades } from '@/service/user';
import { tradeProps } from '@/utils/types';
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const MyTrades = () => {
  const [tradeList, setTradeList] = useState<tradeProps[]>();

  useEffect(() => {
    displayMyTrades()
      .then((res) => {
        console.log(res);
        setTradeList(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "A",
      headerName: "Id",
      width: 300,
      renderCell: (params) => {
        return <p>{params.row.Crypto.id}</p>;
      },
    },
    {
        field: "B",
        headerName: "Crypto",
        width: 100,
        renderCell: (params) => {
          return <p>{params.row.Crypto.name}</p>;
        },
    },
    {
        field: "C",
        headerName: "Amount",
        width: 100,
        renderCell: (params) => {
          return <p>{params.row.amount_traded}</p>;
        },
    },
    {
        field: "D",
        headerName: "Seller",
        width: 100,
        renderCell: (params) => {
          return <p>{params.row.Giver.pseudo}</p>;
        },
    },
    {
        field: "E",
        headerName: "Receiver",
        width: 100,
        renderCell: (params) => {
          return <p>{params.row.Receiver.pseudo}</p>;
        },
    },
]
  return (
    <div className='w-full'>
     {tradeList && tradeList.length > 0 && (
        <DataGrid
          getRowId={(row) => row.id} 
          rows={tradeList}
          columns={columns}
          style={{ minHeight: "100vh", width: "100%" }}
        />
      )}
    </div>
  );
};

export default MyTrades;
