import Header from "@/components/Header";
import Login from "@/components/Login";
import React from "react";

const page = () => {
  return (
     <div>
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-[#ccccff]'>
      <Login />
    </main>
    </div>
  );
};

export default page;
