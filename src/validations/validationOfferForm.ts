import * as yup from "yup";

export const schema = yup.object({
  id_crypto: yup.string().required("id_cryptoless twat"),
  amount: yup.number().required("amountless twat"),
});
