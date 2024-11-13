import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("name missing"),
  value: yup.number().required("value missing"),
  quantity: yup.number().required("quantity missing"),
  image: yup.string().required("image missing"),
});
