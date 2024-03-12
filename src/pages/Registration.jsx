export default function Registration() {
  return (
    <div className="bg-[#f2f4f6] h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        <h1 className="font-Primary text-3xl font-bold text-center text-indigo-600">
          Registration
        </h1>
        {/* Input fields and the form started */}
        <form action="" className="space-y-5">
          <div className="space-y-2 text-sm">
            <label htmlFor="username" className="block font-Primary">
              Your name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="email" className="block font-Primary">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="phone" className="block font-Primary">
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="password" className="block font-Primary">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          <div className="space-y-2 text-sm">
            <label htmlFor="ConfirmPassword" className="block font-Primary">
              Confirm Password
            </label>
            <input
              type="password"
              name="ConfirmPassword"
              id="ConfirmPassword"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
            />
          </div>
          {/* Sign in Button */}
          <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
            Sign Up
            <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          </button>
        </form>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
          Already have an account?
          <a href="#" className="underline hover:text-indigo-600">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
