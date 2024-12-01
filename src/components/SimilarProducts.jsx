import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
import image from "../assets/buds1.webp";

gsap.registerPlugin(ScrollTrigger);

const SimilarProducts = () => {
  const productCards = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center 50%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      cardAnimation.fromTo(
        productCards.current,
        {
          opacity: 0,
          y: 50,
          rotateX: 15,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          ease: "power2.out",
          stagger: 0.1,
          duration: 1.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div>
        <AnimatedTitle
          title="Similar Products"
          containerClass="mt-5 mb-10 text-center py-5"
          spanContainerClass="!text-black"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div
          ref={(el) => (productCards.current[0] = el)}
          className="product-card flex flex-col w-full md:w-1/3 gap-4 cursor-pointer opacity-0 transform translate-y-12"
        >
          <div className="flex flex-col items-center gap-4">
            <img
              src={image}
              alt="Product 1"
              className="bg-gray-300 w-48 h-48 object-cover rounded-lg shadow-md border-2 border-black"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">Wireless Earbuds</h3>
              <p className="text-lg">$99.99</p>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (productCards.current[1] = el)}
          className="product-card flex flex-col w-full md:w-1/3 gap-4 cursor-pointer opacity-0 transform translate-y-12"
        >
          <div className="flex flex-col items-center gap-4">
            <img
              src={image}
              alt="Product 2"
              className="bg-gray-300 w-48 h-48 object-cover rounded-lg shadow-md border-2 border-black"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">Over-Ear Headphones</h3>
              <p className="text-lg">$149.99</p>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (productCards.current[2] = el)}
          className="product-card flex flex-col w-full md:w-1/3 gap-4 cursor-pointer opacity-0 transform translate-y-12"
        >
          <div className="flex flex-col items-center gap-4">
            <img
              src={image}
              alt="Product 3"
              className="bg-gray-300 w-48 h-48 object-cover rounded-md shadow-md border-2 border-black"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">Bluetooth Speaker</h3>
              <p className="text-lg">$129.99</p>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (productCards.current[3] = el)}
          className="product-card flex flex-col w-full md:w-1/3 gap-4 cursor-pointer opacity-0 transform translate-y-12"
        >
          <div className="flex flex-col items-center gap-4">
            <img
              src={image}
              alt="Product 4"
              className="bg-gray-300 w-48 h-48 object-cover rounded-md shadow-md border-2 border-black"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">Bluetooth Speaker</h3>
              <p className="text-lg">$129.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
