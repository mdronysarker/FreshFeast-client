import { useFormik } from "formik";
import Input from "../../Input";
import { signUpValidations } from "../validation/Validation";
import InputError from "../../InputError";

export default function Registration() {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    password: "",
    ConfirmPassword: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signUpValidations,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  return (
    <div className="bg-[#f2f4f6]  min-h-lvh flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white font-sans mx-auto">
        <h1 className="font-Primary text-3xl font-bold text-center text-indigo-600">
          Registration
        </h1>
        {/* Input fields and the form started */}
        <form onSubmit={formik.handleSubmit} action="" className="space-y-2">
          <Input
            label={"Username"}
            name={"username"}
            onChange={formik.handleChange}
            value={formik.values.username}
            type={"text"}
            placeholder={"User Name"}
            id={"username"}
          />
          <InputError error={formik.errors.username} />
          <Input
            label={"Email"}
            name={"email"}
            onChange={formik.handleChange}
            value={formik.values.email}
            type={"email"}
            placeholder={"Email Address"}
            id={"email"}
          />
          <InputError error={formik.errors.email} />
          <Input
            label={"Phone number"}
            name={"phone"}
            onChange={formik.handleChange}
            value={formik.values.phone}
            type={"text"}
            placeholder={"Phone number"}
            id={"phone"}
          />
          <InputError error={formik.errors.phone} />
          <Input
            label={"Password"}
            name={"password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            type={"password"}
            placeholder={"Password"}
            id={"password"}
          />
          <InputError error={formik.errors.password} />
          <Input
            label={"Confirm Password"}
            name={"ConfirmPassword"}
            onChange={formik.handleChange}
            value={formik.values.ConfirmPassword}
            type={"password"}
            placeholder={"Password"}
            id={"ConfirmPassword"}
          />
          <InputError error={formik.errors.ConfirmPassword} />

          {/* Sign in Button */}
          <button
            type="submit"
            className="text-lg font-Secondary rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group"
          >
            Sign Up
            <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          </button>
        </form>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 font-Primary">
          Already have an account?
          <a href="#" className=" underline hover:text-indigo-600 font-Primary">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
