/* eslint-disable react/prop-types */

const Button = ({
  onClick,
  title,
  id,
  leftIcon,
  containerClass,
  rightIcon,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-200 px-7 py-3 text-black ${containerClass}`}
    >
      <div className="flex items-center gap-2">
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div>{title}</div>
        </span>
        {rightIcon}
      </div>
    </button>
  );
};

export default Button;
