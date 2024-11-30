/* eslint-disable react/prop-types */
import bannerimage1 from "../assets/productsbanner1.png";
import bannerimage2 from "../assets/productsbanner2.png";
import bannerimage3 from "../assets/productsbanner3.png";
import Button from "./Button";

const BannerImageBox = ({ src, containerStyles }) => {
  return (
    <div className={containerStyles}>
      <img src={src} alt="Banner Image" className="w-full h-auto" />
    </div>
  );
};

const ProductsBanner = () => {
  return (
    <div id="products-banner" className="my-20 w-screen px-10">
      <div className="relative rounded-lg bg-black text-blue-50 sm:overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-10 left-0 right-0 flex flex-col items-center text-center z-20">
            <p className="font-general text-[10px] uppercase">SALE</p>
            <p className="special-font mt-10 w-full font-zentry text-4xl sm:text-5xl md:text-[6rem] leading-[0.9]">
              Let&apos;s Shop before <br /> it ends
            </p>

            <Button title="Shop Now" containerClass="mt-10 cursor-pointer" />
          </div>

          <div className="absolute left-20 top-20 flex flex-col items-center sm:w-32 lg:w-72 z-10">
            <BannerImageBox containerStyles="z-0 mb-4" src={bannerimage1} />
            <BannerImageBox containerStyles="z-0" src={bannerimage2} />
          </div>

          <div className="absolute top-20 right-20 lg:w-80 z-10 sm:top-[calc(100%+50px)] sm:left-0 sm:right-0 sm:mb-4 lg:top-1/4 lg:right-20 lg:left-auto lg:scale-100">
            <BannerImageBox
              containerStyles="absolute md:scale-125 sm:scale-100 sm:left-0 sm:right-0 sm:top-0 lg:scale-100"
              src={bannerimage3}
            />
          </div>
        </div>

        <div className="sm:hidden flex flex-col items-center text-blue-50">
          <div className="flex flex-col items-center text-center z-20 mt-10">
            <p className="font-general text-[10px] uppercase">SALE</p>
            <p className="special-font mt-10 w-full font-zentry text-4xl sm:text-5xl md:text-[6rem] leading-[0.9]">
              Let&apos;s Shop before <br /> it ends
            </p>

            <Button title="Shop Now" containerClass="mt-10 cursor-pointer" />
          </div>

          <div className="flex justify-between w-full mb-6">
            <BannerImageBox containerStyles="w-1/2" src={bannerimage1} />
            <BannerImageBox containerStyles="w-1/2" src={bannerimage2} />
          </div>

          <div className="mt-6 w-full">
            <BannerImageBox containerStyles="w-full" src={bannerimage3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
