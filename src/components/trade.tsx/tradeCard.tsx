"use client";
import { getAllTrades } from "@/service/trade";
import { tradeProps } from "@/utils/types";
import React, { useEffect, useState } from "react";
import CreateTrade from "../modal/CreateTrade";

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
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white shadow-md rounded-xl'>
          <thead>
            <tr className='bg-black-gray-100 text-black'>
              <th className='py-3 px-4 text-left text-black '>From</th>
              <th className='py-3 px-4 text-left'>To</th>
              <th className='py-3 px-4 text-left'>Value</th>
              <th className='py-3 px-4 text-left'>Quantity</th>
              <th className='py-3 px-4 text-left'>Currency</th>
            </tr>
          </thead>
        </table>
      </div>
      {tradeList &&
        tradeList.map((element) => {
          return (
            <div key={element.id}>
              <table>
                <tbody className='text-black h-[300px] border-2 border-black'>
                  <tr className='border-b border-blue-gray-200'>
                    <td className='py-3 px-4 text-black '>
                      {element.Giver.pseudo}
                    </td>
                    <td className='py-3 px-4'>{element.Receiver.pseudo}</td>
                    <td className='py-3 px-4'>{element.Crypto.value}</td>
                    <td className='py-3 px-4'>{element.Crypto.quantity}</td>
                    <td className='py-3 px-4'>{element.Crypto.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default TradeCard;
