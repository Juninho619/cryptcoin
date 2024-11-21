'use client'
import { getAllPromo } from '@/service/promoCode';
import { promoCodeProps } from '@/utils/types'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import UpdatePromoModal from '../modal/UpdatePromoModal';
import DeletePromoModal from '../modal/DeletePromoModal';

function PromoGrid() {
    const [promoList, setPromoList] = useState<promoCodeProps[]>([])

    useEffect(() => {
        getAllPromo()
          .then((res) => {
            setPromoList(res.data);     
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
          field: "Edit",
          headerName: "Edit",
          width: 150,
          renderCell: (params) => {
            return <UpdatePromoModal promoId={params.row.id}/>
          }
        },
        {
          field: "Delete",
          headerName: "Delete",
          width: 150,
          renderCell: (params) => {
            return <DeletePromoModal promoId={params.row.id}/>
          }
        },
        
      ]

  return (
    <div>
    <h1>Promo Codes</h1>
    <div className='w-full'>
        {promoList && promoList.length > 0 && (
            <DataGrid
            getRowId={(row) => row.id}
            rows={promoList}
            columns={columns}
            style={{ minHeight: "100vh", width: "100%" }}
        />
        )}
    </div>
    </div>
    )
    }
      

export default PromoGrid