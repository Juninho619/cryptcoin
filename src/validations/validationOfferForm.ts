import * as yup from "yup";

export const schema = yup.object({
  id_crypto: yup.string().required("id_crypto missing"),
  amount: yup.number().required("amount missing"),
});
