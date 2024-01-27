"use client";
import React, { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { useQuery } from "react-query";
import ProductsSkeleton from "@/skeleton-components/ProductsSkeleton";
import { ErrorPage } from "@/components/error";

const Products = ({ params }) => {
  const category = decodeURIComponent(params?.category);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["products", category],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/category/${category}`).then(
        (res) => res.json()
      ),
  });

  useEffect(() => {
    refetch();
  }, [category, refetch]);

  if (isLoading) {
    return <ProductsSkeleton />;
  }

  if (isError) {
    return <ErrorPage error={error} />;
  }

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[85%] 2xl:w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
