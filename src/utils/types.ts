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
