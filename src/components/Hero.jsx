import bannerImg from "../assets/headphone.svg";
import Button from "./Button";
import { IoListCircle } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      id="hero-banner"
      className="relative z-0 h-screen w-screen overflow-hidden border border-black"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="videos/hero_bg_video.mp4"
      />

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between p-20  w-full h-full">
        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left space-y-4 mb-6 sm:mb-0 sm:w-1/2">
          <div className="text-2xl font-bold font-zentry lg:text-4xl  ">
            Your One-Stop Shop for <br />
            Cutting-Edge Electronics.
          </div>
          <div>
            <h1 className="special-font uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] z-40 ">
              <b>Tech</b>
              <b>S</b>
              <b>Tore</b>
            </h1>
          </div>
          <div>
            <Button
              id="explore-products-btn"
              title="Explore Products"
              leftIcon={<IoListCircle />}
              containerClass="bg-yellow-300 hover:bg-yellow-400 flex-center gap-1"
            />
          </div>
        </div>

        <div>
          <img
            src={bannerImg}
            className="max-w-full max-h-72  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
