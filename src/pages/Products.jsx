import ProductCard from "../components/ProductCard";
import ProductsBanner from "../components/ProductsBanner";
import products from "../utils/data/products";
import { ToastContainer } from "react-toastify";

const Products = () => {
  return (
    <div>
      <ToastContainer />
      <ProductsBanner />
      <ProductCard products={products} />
    </div>
  );
};

export default Products;
