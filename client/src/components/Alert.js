const Alert = ({ alertType, alertText, classname }) => {
  return (
    <p
      className={`${
        alertType === "success"
          ? "bg-green-200 text-green-500"
          : "bg-red-200 text-red-500"
      } py-2 block w-full text-center tracking-[1.5px] ${
        classname && classname
      }`}
    >
      {alertText || "alert"}
    </p>
  );
};
export default Alert;
