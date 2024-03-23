import React from "react";
import Input from "../components/sharecomponents/Input";
import InputError from "../components/sharecomponents/InputError";
import { useFormik } from "formik";
import { signInValidation } from "../validation/Validation";
import { Link } from "react-router-dom";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signInValidation,
    onSubmit: () => {
      console.log("submit hoice");
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[800px] mx-auto p-6 bg-white shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            {/* Left side form */}
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col space-y-4 mb-4">
                <Input
                  label={"Email"}
                  name={"email"}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type={"email"}
                  placeholder={"Email"}
                  id={"email"}
                />
                <InputError error={formik.errors.email} />
                <Input
                  label={"password"}
                  name={"password"}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type={"password"}
                  placeholder={"password"}
                  id={"password"}
                />
                <InputError error={formik.errors.password} />
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked="false"
                  data-state="unchecked"
                  value="on"
                  className="peer h-4 w-4 shrink-0 rounded-sm border"
                />
                <label className="text-sm font-medium" htmlFor="keep-signed-in">
                  Keep me signed in
                </label>
              </div>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-full bg-red-600 text-white">
                LOG IN
              </button>
            </form>
            <p className="text-sm mt-6 flex gap-2">
              Did you
              <a className="text-blue-600" href="#">
                forget your password?
              </a>
            </p>
          </div>
          {/* Right side content */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm mb-6">
              If you don't already have an account click the button below to
              create your account.
            </p>
            <Link
              to={"/registration"}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 w-full mb-2 bg-black text-white"
            >
              CREATE ACCOUNT
            </Link>
            <p className="text-center my-4">OR</p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 w-full mb-2 bg-blue-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white mr-2"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              SIGN IN WITH FACEBOOK
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 w-full bg-blue-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white mr-2"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              SIGN IN WITH TWITTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
