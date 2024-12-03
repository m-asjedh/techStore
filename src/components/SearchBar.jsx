/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ products, setFilteredProducts }) => {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex justify-center items-center mb-8 mt-8">
      <div className="bg-black p-4 rounded-full flex items-center w-[200px] sm:w[300px] lg:w-[400px]">
        <IoSearch size={30} className="mr-3" color="white" />
        <input
          type="text"
          placeholder="Search Products..."
          className="bg-transparent p-2 focus:outline-none w-full text-white"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
