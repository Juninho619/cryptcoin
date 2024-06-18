"use client";
import { CryptoCard } from "@/components/crypto/CryptoCard";
import { BuyCryptoModal } from "@/components/modal/BuyCryptoModal";
import { getAllCrypto } from "@/service/crypto";
import { cryptoProps } from "@/utils/types";
import React, { useEffect, useState } from "react";

function CryptoCards() {
  return (
    <>
      <div>
        <CryptoCard />
        <BuyCryptoModal
          crypto={{
            created_at: undefined,
            id: "",
            image: undefined,
            name: undefined,
            quantity: undefined,
            updated_at: undefined,
            value: undefined,
          }}
        />
      </div>
    </>
  );
}

export default CryptoCards;
