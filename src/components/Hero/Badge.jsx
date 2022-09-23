const Badge = ({ text, bg }) => {
  return (
    <span
      className={`${bg} text-black text-opacity-75 p-1 rounded-sm font-semibold text-xs lg:text-sm xl:text-base`}
    >
      {text}
    </span>
  );
};

export default Badge;
