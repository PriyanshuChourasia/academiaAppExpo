import * as yup from "yup";




export const LoginValidation = yup.object({
    email: yup.string().email("Invalid username").required('Email is required'),
    password: yup.string().required("Password is required")
})