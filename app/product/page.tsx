"use client";

import dynamic from "next/dynamic";

import React, { useEffect, useState } from "react";

import { Card } from "flowbite-react";

import Link from "next/link";
import Image from "next/image";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import SearchFilter from "./searchPr";

import { AddCart, removeCart, increaseCart } from "@/redux/cartSlice";
import { getProducts } from "@/redux/productSlice";

export default function page() {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.Product?.data);

  const issues = useAppSelector((state) => state.Product.issues);

  const cart = useAppSelector((state) => state.Cart?.cart);

  const Ro = Object.values(cart).flatMap((r: any) => r);

  let zn = [];

  for (let mo = 1; mo < Object.values(Ro).length; mo++) {
    console.log(
      "Ro ===> ",
      Object.values(Ro)[mo]["title"],
      Object.values(Ro)[mo]["id"],
      "QTY ===> ",
      Object.values(Ro)[mo]["qty"]
    );

    zn.push("ID ==", Object.values(Ro)[mo]["id"]);
  }

  console.log("issues = ",issues)

  console.log("Data = ", data)

  // console.log("ZN ===>", zn);

  const truncateString = (str: string, num: number) =>
    str.length > num ? str.slice(0, num) : str;

  truncateString("boomerang", 6); // 'boomer'

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {

    dispatch(getProducts())

    setIsClient(true);
  }, []);

  return (
    <div className="flex  mx-5">
      <SearchFilter />

      {Object.values(data).length > 1 ? (
        <div className="xl:grid xl:grid-cols-4 md:grid md:grid-cols-2 gap-4 my-5 mx-2">
          {(() => {
            if ((Object.values(issues).length > 0)&&(issues)) {
              return Object.values(issues).map((ProductItem: any) => (
                <div
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"
                  key={ProductItem.id}
                >
                  <Link href={`/product/${ProductItem.id}`}>
                    <img
                      className="p-8 rounded-t-lg w-60 h-60 mx-auto"
                      src={ProductItem.images[0]}
                      alt="product image"
                    />
                  </Link>
                  <div className="px-5 pb-5">
                    <Link href={`/product/${ProductItem.id}`}>
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
                        {truncateString(ProductItem.title, 20)}
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        5.0
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white my-2 ">
                        $ {ProductItem.price}
                      </span>

                      {/* {cart.item.filter((x:any)=>console.log(x.id==ProductItem.id))} */}
                      {/* {ProductItem.id==cart.item} */}

                      {isClient && zn.includes(ProductItem.id) ? (
                        <div className=" flex gap-5">
                          <button
                            value={ProductItem.id}
                            onClick={(e: any) => {
                              dispatch(removeCart(e.target.value));
                            }}
                            // href="#"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                          >
                            Decrease
                          </button>

                          <button
                            value={ProductItem.id}
                            onClick={(e: any) => {
                              dispatch(increaseCart(e.target.value));
                            }}
                            // href="#"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                          >
                            Increase
                          </button>
                        </div>
                      ) : (
                        <button
                          value={ProductItem.id}
                          onClick={(e: any) => {
                            dispatch(AddCart(e.target.value));
                          }}
                          // href="#"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ));
            }if((Object.values(data).length < 1) && (Object.values(issues).length < 1) ) {
              return (
                <div
                  className="flex justify-center items-center min-h-screen w-full"
                  style={{ width: "70vw" }}
                >
                  <p className="w-50 h-20">Not Found...</p>
                </div>
              );
            }
          })()}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full min-h-screen">
          {" "}
          <p className="w-20 h-20">Loading...</p>{" "}
        </div>
      )}
    </div>
  );
}
