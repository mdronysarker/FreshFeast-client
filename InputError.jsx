/* eslint-disable react/prop-types */
const InputError = ({ error }) => {
  return (
    <>
      <p className=" font-Primary font-normal text-sm text-error-color text-red-500">
        {error ? <p>{error}</p> : null}
      </p>
    </>
  );
};

export default InputError;
