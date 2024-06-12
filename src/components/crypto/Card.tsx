"use client";
import { getAllCrypto } from "@/service/crypto";
import { cryptoProps } from "@/utils/types";
import React, { useEffect, useState } from "react";

function Card() {
  const [cryptoList, setCryptoList] = useState<cryptoProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllCrypto();
        setCryptoList(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      {cryptoList &&
        cryptoList.map(({ crypto }) => (
          <div
            key={crypto.id}
            className='relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
            <div className='relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700'>
              <img
                src={crypto.image}
                className='h-full w-full object-cover'
                alt={crypto.name}
              />
            </div>
            <div className='p-6'>
              <div className='mb-2 flex items-center justify-between'>
                <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
                  {crypto.name}
                </p>
              </div>
              <div className='mb-2 flex items-center justify-between'>
                <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
                  {crypto.value}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
