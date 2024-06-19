"use client";
import { searchCrypto } from "@/service/crypto";
import { cryptoProps } from "@/utils/types";
import React, { useEffect, useRef, useState } from "react";

function SearchCrypto() {
  const [crypto, setCrypto] = useState<cryptoProps[]>([]);

  const refInput = useRef<HTMLInputElement>();

  const [searchInput, setsearchInput] = useState<string>("");
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchInput) {
        searchCrypto(searchInput).then((data) => {
          setCrypto(data);
        });
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput, setCrypto]);

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
    </div>
  );
}

export default SearchCrypto;
