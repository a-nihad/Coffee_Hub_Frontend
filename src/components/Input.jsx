function Input({ type, onChange, value, ...res }) {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      className="w-full rounded-md border p-2 text-center outline-none"
      {...res}
    />
  );
}

export default Input;
