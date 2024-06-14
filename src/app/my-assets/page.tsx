import { MyAssets } from "@/components/user/MyAssets";
import { myAssets } from "@/service/user";
import { userAssetsProps } from "@/utils/types";
import React, { useEffect, useState } from "react";

const page = () => {
  return (
    <div className='flex flex-wrap items-center'>
      <div className='border-2 border-solid w-80 h-80 rounded-md m-8 p-4 w-full'>
        <MyAssets />
      </div>
    </div>
  );
};
export default page;
