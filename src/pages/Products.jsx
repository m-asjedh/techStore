import { useState } from "react";
import Filterbar from "../components/Filterbar";
import ProductCard from "../components/ProductCard";
import ProductsBanner from "../components/ProductsBanner";
import products from "../utils/data/products";
import { ToastContainer } from "react-toastify";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  return (
    <div>
      <ToastContainer />
      <ProductsBanner />
      <Filterbar
        products={products}
        setFilteredProducts={setFilteredProducts}
      />

      <ProductCard products={filteredProducts} />
    </div>
  );
};

export default Products;
