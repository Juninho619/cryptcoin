import { number, string } from "yup";

export type authProps = {
  firstName: string;
  lastName: string;
  pseudo: string;
  city: string;
  email: string;
  age: number;
  password: string;
  promoCode?: string;
};

export type loginProps = {
  email: string;
  password: string;
};

export type cryptoProps = {
  created_at?: string;
  id: string;
  image?: string;
  name?: string;
  quantity?: number;
  updated_at?: string;
  value?: number;
};

export type OffersProps = {
  id: string;
  User: {
    pseudo: string;
  };
  amount: number;
  created_at: string;
  id_user: string;
  Crypto: cryptoProps;
};

export type userAssetsProps = {
  firstName?: string;
  lastName?: string;
  dollarAvailables?: string;
  pseudo?: string;
  age?: number;
  UserHasCrypto?: [
    {
      Crypto?: cryptoProps;
      amount?: number;
    }
  ];
};

export type promoCodeProps = {
  name: string;
  value: number;
};
