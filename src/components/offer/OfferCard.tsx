'use client'
import { getAllOffers } from '@/service/offer';
import { OffersProps } from '@/utils/types'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'

export const OfferCard = () => {
  const [offerList, setOfferList] = useState<OffersProps[]>();

  useEffect(() => {
    getAllOffers()
      .then((res) => {
        console.log(res);
        setOfferList(res.data);
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
        return <p>{params.row.Crypto.id}</p>;
      },
    },
  ]

  return (
    <div>
      <div className='w-full'>
        {offerList && offerList.length > 0 && (
          <DataGrid
          getRowId={(row) => row.Offer.id} 
          rows={offerList}
          columns={columns}
          style={{ minHeight: "100vh", width: "100%" }}
        />
        )}
      </div>
    </div>
  )
}

