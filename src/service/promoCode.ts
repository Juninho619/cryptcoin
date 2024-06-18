import { promoCodeProps } from "@/utils/types";
import axios from "axios";

export async function getAllPromo() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/all`;
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
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

export async function createPromo(promoCodeProps: promoCodeProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/create`;
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return await axios
    .post(
      url,
      {
        name: promoCodeProps.name,
        value: promoCodeProps.value,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function updatePromoCode(promoCodeProps: promoCodeProps) {
  const id = promoCodeProps.id;
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/update/${id}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(
      url,
      { name: promoCodeProps.name, value: promoCodeProps.value },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function deletePromoCode(id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/delete/${id}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .delete(
      url,

      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}
