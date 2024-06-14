"use client";
import { myAssets } from "@/service/user";
import { userAssetsProps } from "@/utils/types";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

function MyAssets() {
  const [assetList, setAssetList] = useState<userAssetsProps[]>();

  const columns: GridColDef[] = [
    { field: "col1", headerName: "First name", width: 150 },
    { field: "col2", headerName: "Last name", width: 150 },
    { field: "col3", headerName: "Money", width: 150 },
    { field: "col4", headerName: "Pseudo", width: 150 },
    { field: "col5", headerName: "Age", width: 150 },
    { field: "col6", headerName: "Id", width: 150 },
    { field: "col7", headerName: "Name", width: 150 },
    { field: "col8", headerName: "Value", width: 150 },
    { field: "col9", headerName: "Image", width: 150 },
    { field: "col10", headerName: "Quantity", width: 150 },
    { field: "col11", headerName: "Created", width: 150 },
    { field: "col12", headerName: "Last update", width: 150 },
    { field: "col13", headerName: "Amount", width: 150 },
  ];

  const rows: GridRowsProp = [
    { firstName: {assetList.firstName},
    lastName: {assetList.lastName},
    dollarAvailables: {assetList.dollarAvailables},
    pseudo: {assetList.pseudo},
    age: {assetList.age},
    id: {assetList.id},
    name: {assetList.name},
     value: {assetList.value},
    image: {assetList.image},
    quantity: {assetList.quantity},
    created_at: {assetList.created_at},
    updated_at: {assetList.updated_at},
    amount: {assetList.amount} }
  ];

  useEffect(() => {
    myAssets()
      .then((res) => setAssetList(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <DataGrid
        rows={assetList}
        columns={columns}
        style={{ minHeight: "100vh", width: "100%" }}
      />
    </div>
  );
}

export default MyAssets;
