"use client";
import { getAllCrypto, searchCrypto } from "@/service/crypto";
import { cryptoProps } from "@/utils/types";
import { AxiosResponse } from "axios";
import React, { useEffect, useRef, useState } from "react";

function Card() {
  const [cryptoList, setCryptoList] = useState<cryptoProps[]>([]);
  const refInput = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState<string>("");

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
  function setproducts(data: AxiosResponse<any, any>) {
    throw new Error("U twat.");
  }
  const handleSearch = (e: any) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        type='search'
        className='border border-sky-500'
        ref={refInput}
        onChange={handleSearch}
      />
      <button
        className='border border-sky-500'
        onClick={async (e) => {
          const value = refInput.current?.value;
          if (value) {
            const data = await searchCrypto(value);
            setproducts(data);
          }
        }}>
        Search
      </button>
      {cryptoList &&
        cryptoList.map((crypto) => {
          return (
            <div
              key={crypto.id}
              className='relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center'>
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
                <div className='mb-2 flex items-center justify-between'>
                  <p className='block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased'>
                    {crypto.quantity}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
