const FlexibleComponent = ({
  children,
  classname,
  tag,
  type,
  value,
  handleChange,
  label,
  placeholder,
  name,
}) => {
  if (tag === "p") {
    return <p className={classname}>{children}</p>;
  } else if (tag === "input") {
    return (
      <input
        placeholder={placeholder && placeholder}
        type={type && type}
        name={name && name}
        value={value}
        onChange={handleChange}
        className={`border border-gray-300 py-2 mb-2${classname}`}
      />
    );
  } else if (tag === "textarea") {
    return (
      <textarea
        placeholder={placeholder && placeholder}
        type={type && type}
        name={name && name}
        value={value}
        onChange={handleChange}
        className={`border border-gray-300 py-2 mb-2 ${classname}`}
      />
    );
  }
};
export default FlexibleComponent;
