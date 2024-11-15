"use client";
import { searchCrypto } from "@/service/crypto";
import { cryptoProps } from "@/utils/types";
import React, { useEffect, useRef, useState } from "react";
import { BuyCryptoModal } from "../modal/BuyCryptoModal";

function SearchCrypto() {
  const [cryptoList, setCryptoList] = useState<cryptoProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const refInput = useRef<HTMLInputElement>();

  const [searchInput, setsearchInput] = useState<string>("");
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchInput) {
        setIsLoading(true)
        searchCrypto(searchInput).then((data) => {
        setCryptoList(data);
        });
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput, setCryptoList]);

  const handleSearch = (e: any) => {
    setsearchInput(e.target.value);
  };
  return (
    <div>
      <input
        type='search'
        className='border border-sky-500'
        onChange={handleSearch}
      />
      <button className='border border-sky-500'>Search</button>
      {isLoading &&
        cryptoList?.map((element) => {
          return (
            <div>
              <img
                src={element.image}
                alt={element.name}
                className='w-full h-48 object-cover'
              />
              <p>{element.name}</p>

              <p className='text-sm'>Value: {element.value}</p>
              <p className='text-sm'>
                Remaining Quantity on server: {element.quantity}
              </p>
              <BuyCryptoModal cryptoId={element.id} />
            </div>
          );
        })}
    </div>
  );
}

export default SearchCrypto;
