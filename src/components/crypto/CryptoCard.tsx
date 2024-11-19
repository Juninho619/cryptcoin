import { cryptoProps } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { getAllCrypto } from "@/service/crypto";
import { BuyCryptoModal } from "../modal/BuyCryptoModal";
import { DNA } from "react-loader-spinner"

export function CryptoCard() {
  const [cryptoList, setCryptoList] = useState<cryptoProps[]>();
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    setloading(true)
    getAllCrypto()
      .then((res) => { 
        setCryptoList(res);
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
            <div key={element.id}>
              {/* <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  /> */}
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
