"use client";
import { CryptoCard } from "@/components/crypto/CryptoCard";
import SearchCrypto from "@/components/crypto/SearchCrypto";
import { BuyCryptoModal } from "@/components/modal/BuyCryptoModal";
import { getAllCrypto } from "@/service/crypto";
import { cryptoProps } from "@/utils/types";
import React, { useEffect, useState } from "react";

function CryptoCards() {
  return (
    <>
      <div>
        <CryptoCard />
        <BuyCryptoModal />
        <SearchCrypto />
      </div>
    </>
  );
}

export default CryptoCards;
