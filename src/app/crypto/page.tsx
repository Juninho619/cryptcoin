"use client";
import { CryptoCard } from "@/components/crypto/CryptoCard";
import { getAllCrypto } from "@/service/crypto";
import { cryptoProps } from "@/utils/types";
import React, { useEffect, useState } from "react";

function CryptoCards() {
  const [cryptoList, setCryptoList] = useState<cryptoProps>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  useEffect(() => {
    getAllCrypto()
      .then((res) => {
        setCryptoList(res.data);
        setIsReloadNeeded(false);
      })
      .catch((e) => {
        setIsReloadNeeded(false);
        console.log(e);
      });
  }, [isReloadNeeded]);
  return (
    <div>
      <CryptoCard
        crypto={{
          created_at: "",
          id: "",
          image: "",
          name: "",
          quantity: 0,
          updated_at: "",
          value: 0,
        }}
        isBuyVisible={false}></CryptoCard>
    </div>
  );
}

export default CryptoCards;
