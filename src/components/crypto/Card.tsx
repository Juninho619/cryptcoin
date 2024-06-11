import { getAllCrypto } from "@/service/crypto";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [cryptoList, setCryptoList] = useState([{}]);

  useEffect(() => {
    const data = await getAllCrypto();
    setCryptoList(data);
  }, []);
  return (
    <div>
      { cryptoList && cryptoList.map((element)=>{
      <div className='relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
        <div className='relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700'>
          <img src={element.image} className='h-full w-full object-cover' />
        </div>
        <div className='p-6'>
          <div className='mb-2 flex items-center justify-between'>
            <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
              {element.name}
            </p>
          </div>
          <div className='mb-2 flex items-center justify-between'>
            <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
              {element.value}
            </p>
          </div>
        </div>
      </div>
      }
    </div>
  );
}


export default Card;
