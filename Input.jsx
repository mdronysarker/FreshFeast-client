/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ label, type, name, placeholder, id }) => {
  return (
    <>
      <div className="space-y-2 text-sm">
        <label htmlFor={id} className="block font-Primary">
          {label}
        </label>
        <input
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
