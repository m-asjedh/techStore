import ProductCard from "../components/ProductCard";
import ProductsBanner from "../components/ProductsBanner";
import products from "../utils/products";

const Products = () => {
  return (
    <div>
      <ProductsBanner />
      <ProductCard products={products} />
    </div>
  );
};

export default Products;
