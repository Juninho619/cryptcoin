"use client";
import { getAllPromo } from "@/service/promoCode";
import { promoCodeProps } from "@/utils/types";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

function PromoCard() {
  const [promoList, setPromoList] = useState<promoCodeProps[]>();

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
    </div>
  );
}

export default PromoCard;
