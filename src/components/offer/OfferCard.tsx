'use client'
import { getAllOffers } from '@/service/offer';
import { OffersProps } from '@/utils/types'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import BuyFromOfferModal from '../modal/BuyFromOfferModal';

export const OfferCard = () => {
  const [offerList, setOfferList] = useState<OffersProps[]>();
  const [offerId, setOfferId] = useState('')

  useEffect(() => {
    getAllOffers()
      .then((res) => {
        console.log(res);
        const newOfferList = res.data.map((item) => ({
          id: item.Crypto.id,
          name: item.Crypto.name,
          value: item.Crypto.value,
          amount: item.amount,
          created_at: item.created_at,
        }));
        setOfferList(newOfferList);
        setOfferId(newOfferList.id)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "value",
      headerName: "Value",
      width: 150,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 200,
    },
    {
      field: "Buy",
      headerName: "Buy",
      width: 200,
      renderCell: () => {
        return <BuyFromOfferModal offerId={offerId}/>
      }
    },
  ];
  return (
    <div>
      <h1>Offers</h1>
      <div className='w-full'>
        {offerList && offerList.length > 0 && (
          <DataGrid
          getRowId={(row) => row.id} 
          rows={offerList}
          columns={columns}
          style={{ minHeight: "100vh", width: "100%" }}
        />
        )}
      </div>
    </div>
  )
}

