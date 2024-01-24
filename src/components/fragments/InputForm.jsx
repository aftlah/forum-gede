const InputForm = ({ type, placeholder, id, name, onChange, errors, value,onBlur }) => {
  return (
    <>
      <input
        type={type}
        className={`px-2 py-1 border-2 rounded-md md:py-3 border-primary ${errors && "border-red-500"}`}
        placeholder={placeholder}
        id={id}
        name={name}
        autoComplete="off"
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <span className="h-6 text-red-500 ">{errors}</span>
    </>
  );
};

export default InputForm;
