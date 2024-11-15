"use client";
import Header from "@/components/Header";
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
        <Header />
        <CryptoCard />
      </div>
    </>
  );
}

export default CryptoCards;
