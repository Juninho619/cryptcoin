"use client";
import { myAssets } from "@/service/user";
import { userAssetsProps } from "@/utils/types";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

export const MyAssets = () => {
  const [assetList, setAssetList] = useState<userAssetsProps[]>();
 

  useEffect(() => {
    myAssets()
      .then((res) => {
        console.log(res);

        setAssetList(res.UserHasCrypto);
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
        return <p>{params.row.Crypto.name}</p>;
      },
    },
    {
      field: "C",
      headerName: "Money",
      width: 250,
      renderCell: (params) => {
        return <p>{params.row.Crypto.value}</p>;
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "G",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        return (
          <img src={params.row.Crypto.Image} alt={params.row.Crypto.name} />
        );
      },
    },
  ];
  return (
    <div className='w-full'>
      {assetList && assetList.length > 0 && (
        <DataGrid
          getRowId={(row) => row.id} 
          rows={assetList}
          columns={columns}
          style={{ minHeight: "100vh", width: "100%" }}
        />
      )}
    </div>
  );
};
