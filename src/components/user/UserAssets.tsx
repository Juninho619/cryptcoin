"use client";
import { usersAssets } from "@/service/user";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const UserAssets = () => {
  const [assetList, setAssetList] = useState<[]>([]);
  const { push } = useRouter();

  useEffect(() => {
    usersAssets()
      .then((res) => {
        if (res.status === 403){
          toast.error('Unauthorized')
          push('/crypto')
        }
        console.log(res);
        const flattenedData = res.flatMap((user) =>
          user.UserHasCrypto.map((crypto) => ({
            pseudo: user.pseudo,
            dollarAvailables: user.dollarAvailables,
            cryptoName: crypto.Crypto.name,
            cryptoValue: crypto.Crypto.value,
            amount: crypto.amount,
          }))
        );
        setAssetList(flattenedData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "pseudo",
      headerName: "Pseudo",
      width: 150,
    },
    {
      field: "dollarAvailables",
      headerName: "Dollars",
      width: 150,
    },
    {
      field: "cryptoName",
      headerName: "Name",
      width: 150,
    },
    {
      field: "cryptoValue",
      headerName: "Money",
      width: 250,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
  ];

  const getRowId = (row: any) => {
    return `${row.pseudo}-${row.cryptoName}`;
  };

  return (
    <div className='w-full'>
      {assetList && assetList.length > 0 && (
        <DataGrid
          rows={assetList}
          columns={columns}
          getRowId={getRowId}
          style={{ minHeight: "100vh", width: "100%" }}
        />
      )}
    </div>
  );
};
