import * as yup from "yup";

export const schema = yup.object({
    id_offer: yup.string().required('Id offer is missing')
})