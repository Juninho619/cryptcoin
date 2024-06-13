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
  id: string;
  image: string;
  name: string;
  value: number;
  quantity: number;
  updated_at: string;
  created_at: string;
};

export type CryptoPops = {
  created_at: string;
  id: string;
  image: string;
  name: string;
  quantity: number;
  updated_at: string;
  value: number;
};

export type OffersProps = {
  id: string;
  User: {
    pseudo: string;
  };
  amount: number;
  created_at: string;
  id_user: string;
  Crypto: CryptoPops;
};
