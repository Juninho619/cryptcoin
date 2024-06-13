import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("nameless twat"),
  value: yup.number().required("valueless twat"),
  quantity: yup.number().required("quantityless twat"),
  image: yup.string().required("imageless twat"),
});
