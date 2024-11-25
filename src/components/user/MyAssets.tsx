"use client";
import { myAssets } from "@/service/user";
import { userAssetsProps } from "@/utils/types";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import CreateOffer from "../modal/CreateOffer";

export const MyAssets = () => {
  const [assetList, setAssetList] = useState<userAssetsProps[]>();
  const [availableMoney, setAvailableMoney] = useState(0);

  useEffect(() => {
    myAssets()
      .then((res) => {
        console.log(res);
        setAssetList(res.UserHasCrypto);
        setAvailableMoney(res.dollarAvailables);
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
      field: "Sell",
      headerName: "Sell",
      width: 150,
      renderCell: (params) => {
        return <CreateOffer cryptoId={params.row.Crypto.id} />;
      },
    },
    {
      field: "dollarAvailables",
      headerName: "Dollar Available",
      width: 150,
      renderCell: () => {
        return <p>{availableMoney}</p>;
      },
    },
  ];

  return (
    <div className="w-full">
      {assetList && assetList.length > 0 && (
        <DataGrid
          getRowId={(row) => row.Crypto.id}
          rows={assetList}
          columns={columns}
          style={{ minHeight: "100vh", width: "100%" }}
        />
      )}
      <p>Remaining: </p>
      <p>{availableMoney}</p>
    </div>
  );
};
