"use client";
import Header from "@/components/Header";
import { CryptoCard } from "@/components/crypto/CryptoCard";
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
