import CryptoCards from "@/app/crypto/page";
import { OffersProps } from "@/utils/types";
import React from "react";

import toast from "react-hot-toast";
import { Cryptocard } from "../crypto/Card";
import { buyOffer } from "@/service/offer";

export const OfferCard = ({
  offer,
  setIsReloadNeeded,
}: {
  offer: OffersProps;
  setIsReloadNeeded: any;
}) => {
  function handleCryptoBuyViaOffer(offerId: string) {
    buyOffer(offerId)
      .then((res) => {
        if (res.data) {
          if (res.status === 204) {
            toast.error("Item already sold");
          }
          if (res.status === 201) toast.success("Success");
          setIsReloadNeeded(true);
        }
      })
      .catch((e) => {
        if (e) {
          toast.error("error");
        }
      });
  }

  return (
    <div>
      <p>Number of tokens: {offer.amount}</p>
      <p>Seller: {offer.User.pseudo}</p>
      <Cryptocard crypto={offer.Crypto} isBuyVisible={false} />
      <div className='w-full flex justify-end'>
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
};
