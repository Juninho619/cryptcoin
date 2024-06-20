import Header from "@/components/Header";
import CreateTrade from "@/components/modal/CreateTrade";
import TradeCard from "@/components/trade.tsx/tradeCard";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <TradeCard />
      <CreateTrade />
    </div>
  );
};

export default page;
