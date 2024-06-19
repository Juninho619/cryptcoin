import { buyCryptoProps, cryptoProps } from "@/utils/types";
import axios from "axios";

export async function getAllCrypto() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`;
  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return await axios
    .get(url, axiosConfig)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function searchCrypto(cryptoName: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${cryptoName}`;
  const result = await axios.get(url);
  const data = result.data;
  return data.products;
}

export async function buyCrypto(buyCryptoProps: buyCryptoProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        id_crypto: buyCryptoProps.id_crypto,
        amount: buyCryptoProps.amount,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function createCrypto(cryptoProps: cryptoProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        name: cryptoProps.name,
        value: cryptoProps.value,
        quantity: cryptoProps.quantity,
        image: cryptoProps.image,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}
