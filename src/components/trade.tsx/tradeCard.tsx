"use client";
import { getAllTrades } from "@/service/trade";
import { tradeProps } from "@/utils/types";
import React, { useEffect, useState } from "react";

const TradeCard = () => {
  const [tradeList, setTradeList] = useState<tradeProps[]>();

  useEffect(() => {
    getAllTrades()
      .then((res) => {
        setTradeList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className='flex min-h-screen items-center justify-center'>
      {tradeList &&
        tradeList.map((element) => {
          return (
            <div className='overflow-x-auto' key={element.id}>
              <table className='min-w-full bg-white shadow-md rounded-xl'>
                <thead>
                  <tr className='bg-blue-gray-100 text-black'>
                    <th className='py-3 px-4 text-left'>From</th>
                    <th className='py-3 px-4 text-left'>To</th>
                    <th className='py-3 px-4 text-left'>Value</th>
                    <th className='py-3 px-4 text-left'>Quantity</th>
                    <th className='py-3 px-4 text-left'>Currency</th>
                  </tr>
                </thead>
                <tbody className='text-black'>
                  <tr className='border-b border-blue-gray-200'>
                    <td className='py-3 px-4'>{element.Giver.pseudo}</td>
                    <td className='py-3 px-4'>{element.Receiver.pseudo}</td>
                    <td className='py-3 px-4'>100</td>
                    <td className='py-3 px-4'>$5025.00</td>
                    <td className='py-3 px-4'>{element.Crypto.name}</td>
                  </tr>
                </tbody>
              </table>
              {/* <a
                href='#'
                className='font-medium text-blue-600 hover:text-blue-800'>
                Edit
              </a> */}
            </div>
          );
        })}
    </div>
  );
};

export default TradeCard;
