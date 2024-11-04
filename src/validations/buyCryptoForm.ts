import * as yup from "yup";

export const schema = yup.object({
  // id_crypto: yup.string().required("no id"),
  amount: yup.number().required("no amount"),
});
