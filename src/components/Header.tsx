'use client'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import toast from "react-hot-toast";

interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
  username: string;
}

const Header = () => {
  const { push } = useRouter();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setUsername(decoded.username);
      } catch (error) {
        toast.error('Invalid token. Redirecting to homepage');
        push('/');
      }
    } else {
      toast.error('Disconnected. Redirecting to homepage');
      push('/');
    }
  }, [push]);

  function disconnect() {
    localStorage.removeItem('token');
    push('/');
  }

  return (
    <div>
      <header className='flex border-b py-4 px-4 sm:px-10 bg-[#00001a] font-[sans-serif] min-h-[70px] tracking-wide sticky'>
        <div className='flex flex-wrap items-center gap-5 w-full'>
          <h1 className="text-white" onClick={() => push('/crypto')}>Cryptcoin</h1>
          <div
            id='collapseMenu'
            className='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
            <button
              id='toggleClose'
              className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 fill-black'
                viewBox='0 0 320.591 320.591'>
                <path
                  d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                  data-original='#000000'></path>
                <path
                  d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                  data-original='#000000'></path>
              </svg>
            </button>
            <ul className='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='./crypto'
                  className='lg:hover:text-[#007bff] text-white block font-semibold text-[15px]'>
                  Crypto
                </a>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='./offer'
                  className='lg:hover:text-[#007bff] text-white block font-semibold text-[15px]'>
                  Offer
                </a>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='./my-assets'
                  className='lg:hover:text-[#007bff] text-white block font-semibold text-[15px]'>
                  My Assets
                </a>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <a
                  href='./my-trades'
                  className='lg:hover:text-[#007bff] text-white block font-semibold text-[15px]'>
                  My Trades
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          ...
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="/create"
              className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100 data-[focus]:text-black data-[focus]:outline-none"
            >
              Create Crypto
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="/promo"
              className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100 data-[focus]:text-black data-[focus]:outline-none"
            >
              Promo codes
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="/users-assets"
              className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100 data-[focus]:text-black data-[focus]:outline-none"
            >
              Users Assets
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="/crypto-edit"
              className="block px-4 py-2 text-sm text-black data-[focus]:bg-gray-100 data-[focus]:text-black data-[focus]:outline-none"
            >
              Edit Crypto
            </a>
          </MenuItem>
          <form action="#" method="POST">
          </form>
        </div>
      </MenuItems>
    </Menu>
        <div className="flex items-end text-white">
          { username && (
            <p>Hey, {username}</p>
          )
          }
          <FaPowerOff className="hover:bg-red-600" onClick={disconnect} />
        </div>
      </header>
    </div>
  );
};

export default Header;
