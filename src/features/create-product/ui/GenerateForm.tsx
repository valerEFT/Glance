export const generateForm = (
  name: string,
  type: string,
  placeholder: string
) => {
  return (
    <div>
      <label htmlFor={name}>{placeholder}</label>
      <input type={type} id={name} placeholder={placeholder} name={name} />
    </div>
  );
};
