"use client";
import { myAssets } from "@/service/user";
import { userAssetsProps } from "@/utils/types";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

function MyAssets() {
  const [assetList, setAssetList] = useState<userAssetsProps[]>();

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
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
