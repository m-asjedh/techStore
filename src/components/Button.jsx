/* eslint-disable react/prop-types */

const Button = ({ title, id, leftIcon, containerClass, rightIcon }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
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
