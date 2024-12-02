import { TiLocationArrow } from "react-icons/ti";
import FeatureCard from "./FeatureCard";
import AnimatedTitle from "./AnimatedTitle";

const Features = () => {
  return (
    <section className="bg-white pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-10">
          <AnimatedTitle
            title="Experience the future of tech with innovation at your fingertips!"
            containerClass="mt-5 text-center"
            spanContainerClass="!text-black"
          />
        </div>

        <div className="border border-black relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <FeatureCard
            src="videos/feature5.mp4"
            title="Smart Watches"
            description="Get the best deals on the latest gadgets, including smartphones, laptops, and more."
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="relative border border-black col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
            <FeatureCard
              src="videos/feature2.mp4"
              title="Headphones"
              description="Get the best deals on the latest gadgets, including smartphones, laptops, and more."
            />
          </div>

          <div className="relative border border-black col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1  md:col-span-1 ">
            <FeatureCard
              src="videos/feature4.mp4"
              title="Headphones"
              description="Get the best deals on the latest gadgets, including smartphones, laptops, and more."
            />
          </div>
          <div className="relative border border-black col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1  md:col-span-1 ">
            <FeatureCard
              src="videos/feature1.mp4"
              title="Headphones"
              description="Get the best deals on the latest gadgets, including smartphones, laptops, and more."
              containerClass="!text-black"
            />
          </div>

          <div className="  relative border border-black col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5 ">
              <h1 className="uppercase md:text-6xl text-4xl font-black font-zentry max-w-64 text-black">
                More coming soon!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out border border-black">
            <video
              src="videos/feature3.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
