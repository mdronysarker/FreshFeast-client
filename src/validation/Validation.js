import * as Yup from "yup";

const authRole = {
  username: Yup.string().required("Name must be provided"),
  email: Yup.string().required("email must be provided"),
  phone: Yup.string().required("phone must be provided"),
  password: Yup.string().min(8).max(30).required("password must be provided"),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must be match!")
    .required("Please confirm your password"),
};

export const signUpValidations = Yup.object({
  ...authRole,
});

export const signInValidation = Yup.object({
  email: authRole.email,
  password: authRole.password,
});
