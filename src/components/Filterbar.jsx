/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const Filterbar = ({ products, setFilteredProducts }) => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let filteredData = products;

    if (selectedBrand !== "All") {
      filteredData = filteredData.filter(
        (item) => item.brand === selectedBrand
      );
    }

    if (selectedCategory !== "All") {
      filteredData = filteredData.filter(
        (item) => item.category === selectedCategory
      );
    }

    setFilteredProducts(filteredData);
  }, [selectedBrand, selectedCategory, products, setFilteredProducts]);

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="px-4 py-6 lg:px-20 bg-gray-100">
      <SearchBar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-1/2">
          <p className="font-bold text-xl text-center text-black mb-4">Brand</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Sony", "Samsung", "Apple", "JBL"].map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandFilter(brand)}
                className={`rounded-full px-5 py-2 border ${
                  selectedBrand === brand
                    ? "bg-black text-white border-black shadow-md"
                    : "bg-white text-black border-gray-400 hover:bg-black hover:text-white shadow-sm"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <p className="font-bold text-xl text-center text-black mb-4">
            Category
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "All",
              "Buds",
              "Earphones",
              "Headphones",
              "Speakers",
              "Watches",
              "Wireless Earphones",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`rounded-full px-5 py-2 border ${
                  selectedCategory === category
                    ? "bg-black text-white border-black shadow-md"
                    : "bg-white text-black border-gray-400 hover:bg-black hover:text-white shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
