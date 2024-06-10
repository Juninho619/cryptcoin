export type authProps = {
  firstName: string;
  lastName: string;
  pseudo: string;
  city: string;
  email: string;
  password: string;
  promoCode?: string;
};

export type loginProps = {
  email: string;
  password: string;
};
