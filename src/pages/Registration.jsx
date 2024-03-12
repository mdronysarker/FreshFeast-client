import Input from "../../Input";

export default function Registration() {
  return (
    <div className="bg-[#f2f4f6] h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        <h1 className="font-Primary text-3xl font-bold text-center text-indigo-600">
          Registration
        </h1>
        {/* Input fields and the form started */}
        <form action="" className="space-y-5">
          <Input
            label={"Username"}
            name={"username"}
            type={"text"}
            placeholder={"User Name"}
            id={"username"}
          />
          <Input
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Email Address"}
            id={"email"}
          />
          <Input
            label={"Phone number"}
            name={"phone"}
            type={"text"}
            placeholder={"Phone number"}
            id={"phone"}
          />
          <Input
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            id={"password"}
          />
          <Input
            label={"Confirm Password"}
            name={"ConfirmPassword"}
            type={"password"}
            placeholder={"Password"}
            id={"ConfirmPassword"}
          />

          {/* Sign in Button */}
          <button className="text-lg font-Secondary rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
            Sign Up
            <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          </button>
        </form>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 font-Primary">
          Already have an account?
          <a href="#" className="underline hover:text-indigo-600 font-Primary">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
