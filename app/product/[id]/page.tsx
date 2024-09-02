"use client";

import React, { useEffect, useState } from "react";

import { products } from "@/data/data";
import Link from "next/link";

type Product = {
  id: number;
  title: any;
  description: string;
  price: number;
  images: any;

  category: string;
};

const ProductDetails = ({
  params,
}: {
  params: { id: number };
  item: { item: Product };
}) => {
  const { id } = params;

  const item = products.find((product) => product.id == id);

  console.log("Item ", item);

  return (
    <>
      <div
        className="md:flex md:flex-row gap-5 mt-10 mx-20 sm:flex sm:flex-col"
        key={id}
      >
        <img
          className="h-[75vh] w-1/2  shadow-2xl rounded-3xl"
          src={item?.images[0]}
        />

        <div className="flex flex-col items-center  h-[75vh] w-1/2 py-20 px-5 border-gray-400 shadow-2xl rounded-3xl shadow-gray-400 ">
          <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
            Title : {item?.title}
          </h1>
          <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400 text-center">
            Description : {item?.description}
          </h1>
          <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
            Price : ${item?.price}
          </h1>
          <h1 className="font-extrabold my-2 py-2 border-b-slate-500 shadow-2xl rounded-xl px-5 bg-slate-400">
            Category : {item?.category}
          </h1>

          {/* <Link
            href="#"
            className="my-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
