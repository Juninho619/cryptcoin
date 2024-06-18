import { OffersProps } from "@/utils/types";
import axios from "axios";

export async function getAllOffers() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/all`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(
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

export async function createOffer(OffersProps: OffersProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/all`;

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
      { id_crypto: OffersProps.id, amount: OffersProps.amount },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function updateOffer(idOffer: string, amount: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/update/${idOffer}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(url, { idOffer: idOffer }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function deleteOffer(idOffer: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/delete/${idOffer}`;

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
