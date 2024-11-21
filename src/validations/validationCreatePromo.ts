import * as yup from "yup";


export const schema = yup.object({
    name: yup.string().required('Name is missing. Please include one'),
    value: yup.number().required('Value is missing. Please include a number')
})