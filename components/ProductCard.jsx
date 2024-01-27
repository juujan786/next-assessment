"use client";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  // const navigate = useNavi
  const dispatch = useDispatch();

  const handleClick = () => {
    // navigate(`/${product.category}/${product.id}`);
  };

  return (
    <div className="p-2 relative shadow-lg bg-white rounded-lg hover:shadow-2xl">
      <Link href={`/${product.category}/${product.id}`} className="w-full  cursor-pointer">
        <div className="relative w-full rounded-lg overflow-hidden h-[200px] flex justify-between items-center">
          <Image
            fill
            // className="object-cover"
            src={product.image}
            alt="ProductImage"
          />
        </div>
        <div className="my-4">
          <h1 className="text-lg font-bold leading-3">
            {product.title.length > 25
              ? `${product.title.slice(0, 23)}...`
              : product.title}
          </h1>
          <span className="text-sm text-[#131313]">{product.category}</span>
        </div>
        <div>
          <p className="text-sm">
            {product.description.length > 60
              ? `${product.description.slice(0, 57)}...`
              : product.description}
          </p>
        </div>
        <div className="my-4">
          <p className="text-sm text-[#131313]">
            Price
            <span className="text-lg text-black font-bold ml-2">
              ${product.price}
            </span>
          </p>
        </div>
      </Link>
      <div>
        <button
          onClick={() => dispatch(cartActions.addItemToCart(product))}
          className="z-50 w-full bg-black border-2 border-black py-2 px-6 rounded-xl flex justify-center gap-2 text-white hover:bg-white hover:text-black transition-all delay-100 ease-in-out"
        >
          <span>Add to cart</span>
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
