import { SIZES } from "@/constants/theme";
import React from "react";
import ProductsPhone from "./ProductPhone";
import ProductTablet from "./ProductTablet";

const Products = () => {
  return <>{SIZES.isTablet ? <ProductTablet /> : <ProductsPhone />}</>;
};

export default Products;
