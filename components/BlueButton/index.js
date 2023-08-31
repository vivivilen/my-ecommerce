const BlueButton = ({ title, addedClassName, ...rest }) => {
  return (
    <button
      className={`w-full bg-blue-950 px-8 py-3 text-sm text-white font-semibold rounded ${addedClassName}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default BlueButton;
