"use client";

import { getAllOffers } from "@/service/offer";
import { OffersProps } from "@/utils/types";
import { OfferCard } from "@/components/offer/OfferCard";
import React, { useEffect, useState } from "react";

function page() {
  const [offersList, setOffersList] = useState<OffersProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  useEffect(() => {
    getAllOffers()
      .then((res) => {
        setOffersList(res.data);
        setIsReloadNeeded(false);
      })
      .catch((e) => {
        setIsReloadNeeded(false);
        console.log(e);
      });
  }, [isReloadNeeded]);

  return (
    <div className='border-2 border-gray-400 rounded-lg'>
      {offersList &&
        offersList?.map((offer) => {
          return (
            <div
              key={offer.id}
              className='border-2 border-solid w-full rounded-md mt-1 p-2 '>
              <OfferCard offer={offer} setIsReloadNeeded={setIsReloadNeeded} />
            </div>
          );
        })}
    </div>
  );
}

export default page;
