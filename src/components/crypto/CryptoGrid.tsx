import { getAllCrypto } from '@/service/crypto';
import { cryptoProps } from '@/utils/types';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import DeleteCryptoModal from '../modal/DeleteCryptoModal';

function CryptoGrid() {
    const [cryptoList, setCryptoList] = useState<cryptoProps[]>();

    useEffect(() => {
        getAllCrypto()
          .then((res) => { 
            setCryptoList(res);
          })
          .catch((e) => {
            console.log(e);
          });
      }, []);

      const columns: GridColDef[] = [
          {
            field: "id",
            headerName: "ID",
            width: 150,
          },
          {
            field: "name",
            headerName: "Name",
            width: 150,
          },
          {
            field: "quantity",
            headerName: "Quantity",
            width: 150,
          },
          {
            field: "updated_at",
            headerName: "Updated At",
            width: 150,
          },
          {
            field: "value",
            headerName: "Value",
            width: 150,
          },
          {
            field: "created_at",
            headerName: "Created At",
            width: 150,
          },
          {
            field: "Delete",
            headerName: "Delete",
            width: 150,
            renderCell: (params) => {
              return <DeleteCryptoModal cryptoId={params.row.id}/>
            }
          },
      ]
  return (
    <div><div>
    <h1>Crypto List</h1>
    <div className='w-full'>
        {cryptoList && cryptoList.length > 0 && (
            <DataGrid
            getRowId={(row) => row.id}
            rows={cryptoList}
            columns={columns}
            style={{ minHeight: "100vh", width: "100%" }}
        />
        )}
    </div>
    </div></div>
  )
}

export default CryptoGrid