"use client";
import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/cart-slice";
import Image from "next/image";
import ProductDetailsSkeleton from "@/skeleton-components/ProductDetailsSkeleton";
import { ErrorPage } from "@/components/error";
import { useRouter } from "next/navigation";

const ProductDetails = ({ params }) => {
  const id = params.id;
  const route = useRouter();

  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (isError) {
    return <ErrorPage error={error} />;
  }
  return (
    <div className="w-[90%] md:w-[85%] lg:w-[85%] 2xl:w-[1300px] mx-auto mb-4">
      <button
        onClick={() => route.back()}
        className="bg-white border-none outline-none text-black mb-10"
      >
        Back
      </button>
      <div className="flex flex-wrap justify-between gap-10">
        <div className="w-full lg:w-[45%] min-h-[400px] p-2 shadow-lg rounded-lg">
          <div className="relative w-full h-full">
            <Image
              fill
              // className="rounded-lg w-full h-full object-contain"
              src={data.image}
              alt="ProductImage"
            />
          </div>
        </div>
        <div className="w-full lg:w-[45%] min-h-full flex flex-col justify-between">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <div>
            <p className="text-sm text-[#131313]">Category</p>
            <p className="text-sm text-black font-bold">{data.category}</p>
          </div>
          <div>
            <p className="text-sm text-[#131313]">Description</p>
            <p className="text-sm text-black">{data.description}</p>
          </div>
          <div>
            <p className="text-sm text-[#131313]">Price</p>
            <p className="text-lg text-black font-bold">${data.price}</p>
          </div>
          <div>
            <button
              onClick={() => dispatch(cartActions.addItemToCart(data))}
              className="w-full bg-black border-2 border-black py-2 px-6 rounded-xl flex justify-center gap-2 text-white hover:bg-white hover:text-black transition-all delay-100 ease-in-out"
            >
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
