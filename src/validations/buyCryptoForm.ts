import * as yup from "yup";

export const schema = yup.object({
  amount: yup.number().required("amount missing"),
});
