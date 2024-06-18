import { cryptoProps } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { getAllCrypto } from "@/service/crypto";

export function CryptoCard() {
  const [cryptoList, setCryptoList] = useState<cryptoProps[]>();
  const [loading, setloading] = useState<boolean>(false);
  console.log({ data: cryptoList });
  useEffect(() => {
    getAllCrypto()
      .then((res) => {
        setCryptoList(res);
        setloading(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className='flex flex-wrap justify-between items-center border-dotted border-2 p-3'>
      {loading &&
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
            </div>
          );
        })}
    </div>
  );
}
