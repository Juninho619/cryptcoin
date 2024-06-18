"use client";
import { OffersProps } from "@/utils/types";
import React, { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

import { CryptoCard } from "../crypto/CryptoCard";
import { buyOffer } from "@/service/trade";

export function OfferCard({
  offer,
  setIsReloadNeeded,
}: {
  offer: OffersProps;
  setIsReloadNeeded: Dispatch<SetStateAction<boolean>>;
}) {
  function handleCryptoBuyViaOffer(offerId: string) {
    buyOffer(offerId)
      .then((res) => {
        if (res.data) {
          if (res.status === 204) {
            toast.error("Item already sold");
          }

          if (res.status === 201) {
            toast.success("Success");
            setIsReloadNeeded(true);
          }
        }
      })
      .catch((e) => {
        if (e) {
          toast.error("error");
          console.log(e);
        }
      });
  }
  return (
    <div className='w-full flex justify-end'>
      <p>Number of tokens: {offer.amount}</p>
      <p>Seller: {offer.User.pseudo}</p>
      {/* <CryptoCard crypto={offer.Crypto} isBuyVisible={false} /> */}
      <div>
        <button
          className='bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1'
          onClick={() => {
            handleCryptoBuyViaOffer(offer.id);
          }}>
          Buy
        </button>
      </div>
    </div>
  );
}
