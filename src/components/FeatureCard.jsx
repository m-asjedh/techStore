/* eslint-disable react/prop-types */

const FeatureCard = ({ src, title, description, containerClass }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute size-full object-cover object-center"
      ></video>
      <div
        className={`relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ${containerClass}`}
      >
        <div>
          <h1 className="font-zentry text-2xl lg:text-5xl"> {title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
