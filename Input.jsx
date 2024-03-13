/* eslint-disable react/prop-types */

const Input = ({ label, type, name, placeholder, id, onChange, value }) => {
  return (
    <>
      <div className="space-y-2 text-sm">
        <label htmlFor="username" className="block ">
          {label}
        </label>
        <input
          onChange={onChange}
          value={value}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
        />
      </div>
    </>
  );
};

export default Input;
