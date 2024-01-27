import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsSkeleton = () => {
  return (
    <div className="w-[90%] md:w-[85%] lg:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};

export default ProductsSkeleton;
