import React, { useRef, useState } from "react";

function SearchCrypto() {
  return (
    <div>
      {" "}
      <input type='search' className='border border-sky-500' />
      <button className='border border-sky-500'>Search</button>
    </div>
  );
}

export default SearchCrypto;
