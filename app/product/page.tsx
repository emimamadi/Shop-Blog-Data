"use client";

import dynamic from "next/dynamic";

import React, { useEffect, useState } from "react";

// import Card from "@/components/cardProduct";

import { Card } from "flowbite-react";

// import Sidebar from "@/components/sidebar";

import Link from "next/link";
import Image from "next/image";

// import { selectProduct } from "@/redux/productSlice";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import SearchFilter from "./searchPr";

// import { getAllProducts } from "@/data/Product";

// import { FetchProduct, searchProduct } from "@/redux/productSlice";

import { AddCart, removeCart, increaseCart } from "@/redux/cartSlice";

// const NoSSR = dynamic(() => import("@/app/pr/page"));

// const isSSR = () => typeof window === "undefined";

export default function page() {
  // if (typeof window !== "undefined") {
  //   console.log("local storage = ", window.localStorage);
  // }

  const dispatch = useAppDispatch();

  // const [products, setProducts] = useState([]);

  const data = useAppSelector((state) => state.Product.data);

  const issues = useAppSelector((state) => state.Product.issues);

  const cart = useAppSelector((state) => state.Cart.cart);

  // let pl = [] || {};

  // console.log(
  //   "Cart == > ",
  //   Object.values(cart).map((vb: any) => vb)
  // );

  // for (let i = 0; i < cart.length; i++) {
  //   console.log(`i=====> ${i}`, Object.values(cart)[i]);

  //   console.log("JAFAR === >", Object.values(Object.values(cart)[i] || {})[0]);

  //   let uu = Object.values(Object.values(cart)[i] || {})[0] || {};

  //   //  console.log("UUUUUU====>",uu)

  //   // Object.values(uu).map((vo:any)=>console.log("TITle ===> ",vo) )

  //   console.log("Type of UU==>", typeof uu);
  // }

  // const Result = Object.values(cart)
  //   .flatMap((x: any) => x.item)
  //   .map((s: any) => s);

  // console.log("Result flatmap ====> ", Result);

  // const Taghi=Object.keys(cart).flatMap((r)=>(cart[r].item))

  const Taghi = Object.values(cart).flatMap((r: any) => r);

  // const Shamsi=Object.keys(Taghi).flatMap((cc:any)=>Taghi[cc])

  let zn = [];

  // zn.push(Object.values(Taghi)[1]["title"])

  //++++++++++++++++++++++++++++++++++++++++

  for (let mo = 1; mo < Object.values(Taghi).length; mo++) {
    console.log(
      "Taghi ===> ",
      Object.values(Taghi)[mo]["title"],
      Object.values(Taghi)[mo]["id"],
      "QTY ===> ",
      Object.values(Taghi)[mo]["qty"]
    );

    // zn.push([Object.values(Taghi)[mo]["id"],Object.values(Taghi)[mo]["title"],Object.values(Taghi)[mo]["qty"]]);

    zn.push("ID ==", Object.values(Taghi)[mo]["id"]);
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++

  console.log("ZN ===>", zn);

  // console.log("Shamsi  ===> ", Shamsi)

  // Object.values(cart).forEach((ele:any) => {
  //   console.log("ele ===>", ele.item);

  //  const xg=ele.item

  //   // Object.values(ele).forEach((ci)=>

  //   //   console.log(ci)

  //   //   pl.push(ele)

  //   // pl.push(ele)

  //   // console.log("PL====> ", pl)
  // });

  // console.log("xg======> " , xg)

  // pl=item

  // console.log("ITEM === > ", Object.values(pl).map((xo:any)=>xo))

  const truncateString = (str: string, num: number) =>
    str.length > num ? str.slice(0, num) : str;

  truncateString("boomerang", 6); // 'boomer'

  // async function GetProducts() {
  //   const res:[] = await getAllProducts();

  //   // console.log(res)

  //   if (res) {
  //     setProducts(res);
  //   }
  // }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // GetProducts();

    // dispatch(FetchProduct());

    setIsClient(true);

    //  dispatch(searchProduct(e.target.value))
  }, []);

  // console.log("value = ", data);

  // <FetchProduct/>

  // let productArray: [] = await getData();

  // let value;

  // const count = useAppSelector(selectProduct)

  // const handleSearch=(e:any)=>{

  //   dispatch(searchProduct(e.target.value))

  // }

  // const [value,setValue]=useState(50)

  // const handleRange=(e:any)=>{
  //   "use client"
  //   setValue(e.target.value)
  //   console.log(value)
  // }

  // console.log(productArray);

  // const productSearch = useAppSelector((state) => state.Products);

  // console.log(productSearch)

  // localStorage.setItem("mamad","akbar")

  // if (typeof window !== "undefined") {
  //   console.log("local storage = ", window.localStorage);

  //   console.log("local storage 00000000 ==== ", localStorage.getItem("cart"));

  //   console.log(
  //     "local storage 00000000 ==== Type OF=== ",
  //     typeof localStorage.getItem("cart")
  //   );

  //   // console.log("local sotrage cart 66666666 == " , JSON.parse(localStorage.getItem("cart"))

  //   //  console.log("  1  ===  ",JSON.parse(JSON.stringify(localStorage.getItem("cart"))))

  //   //  console.log("  2 ===  ",JSON.stringify(JSON.stringify(localStorage.getItem("cart"))))

  //   console.log(
  //     "local storage cart  11111111= ",
  //     localStorage.getItem("cart")?.split(",")
  //   );

  //   // console.log("local storage cart = " , localStorage.getItem("cart")?.split(","))

  //   let mo = localStorage.getItem("cart");

  //   console.log("local storage cart 2222 = ", typeof mo);

  //   console.log(
  //     "local storage cart  55555555555555555= ",
  //     localStorage.getItem("cart")?.split(",")[0].split(" ")
  //   );

  //   console.log(
  //     "local storage cart 6666666666666666 = ",
  //     localStorage.getItem("cart")?.split(",")[0]
  //   );

  //   console.log(
  //     "local storage cart 777777777777777777777 = ",
  //     JSON.parse(localStorage.getItem("cart") || "0")
  //   );

  //   let x = JSON.parse(localStorage.getItem("cart") || "0");

  //   console.log(
  //     "Extract data ===",

  //     Object.values(x).map((x: any) => x)
  //   );

  //   let op = Object.values(x).map((we: any) => we.item);

  //   // for(let i =0 ; i<=op.length; i++){

  //   //   console.log("Object Maker ===> ", Object.values(op).map((k:{id:number,title:string})=>k.title));
  //   // }

  //   console.log("OP ==== > ");

  //   // for(let i=1 ; i<op.length; i++){
  //   //   for(let y =1 ; y < op.length; y++){
  //   //     console.log("LOOPP  ==== > ", op[i][y])
  //   //   }
  //   // }
  // }

  return (
    <div className="flex  mx-5">
      <SearchFilter />

      {/* <Sidebar /> */}

      <div className="xl:grid xl:grid-cols-4 md:grid md:grid-cols-2 gap-4 my-5 mx-2">
        {Object.values(issues).length > 0
          ? Object.values(issues).map((ProductItem: any) => (
              <div
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"
                key={ProductItem.id}
              >
                <Link href={`/pr/${ProductItem.id}`}>
                  <img
                    className="p-8 rounded-t-lg w-60 h-60 mx-auto"
                    src={ProductItem.images[0]}
                    alt="product image"
                  />
                </Link>
                <div className="px-5 pb-5">
                  <Link href={`/pr/${ProductItem.id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
            ))
          : Object.values(data).map((ProductItem: any) => (
              <div
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"
                key={ProductItem.id}
              >
                <Link href={`/pr/${ProductItem.id}`}>
                  <img
                    className="p-8 rounded-t-lg w-60 h-60 mx-auto"
                    src={ProductItem.images[0]}
                    alt="product image"
                  />
                </Link>
                <div className="px-5 pb-5">
                  <Link href={`/pr/${ProductItem.id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {truncateString(ProductItem.title, 23)}
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
                    <span className="text-3xl font-bold text-gray-900 dark:text-white my-2">
                      $ {ProductItem.price}
                    </span>

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

                    {/* <Link
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </Link> */}
                  </div>
                </div>
              </div>

              // <ProductPost
              //   key={PostItem.id}
              //   title={PostItem.title}
              //   body={PostItem.body}
              // />

              // <Card />
              // <Card />
              // <Card />
              // <Card />
              // <Card />
              // <Card />
              // <Card />
              // <Card />

              // <Card
              //   key={ProductItem.id}
              //   className="min-w-sm"
              //   imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
              //   imgSrc={ProductItem.image}

              // >
              //   <a href="#">
              //     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              //     {ProductItem.title}
              //     </h5>
              //   </a>
              //   <div className="mb-5 mt-2.5 flex items-center">
              //     <svg
              //       className="h-5 w-5 text-yellow-300"
              //       fill="currentColor"
              //       viewBox="0 0 20 20"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              //     </svg>
              //     <svg
              //       className="h-5 w-5 text-yellow-300"
              //       fill="currentColor"
              //       viewBox="0 0 20 20"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              //     </svg>
              //     <svg
              //       className="h-5 w-5 text-yellow-300"
              //       fill="currentColor"
              //       viewBox="0 0 20 20"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              //     </svg>
              //     <svg
              //       className="h-5 w-5 text-yellow-300"
              //       fill="currentColor"
              //       viewBox="0 0 20 20"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              //     </svg>
              //     <svg
              //       className="h-5 w-5 text-yellow-300"
              //       fill="currentColor"
              //       viewBox="0 0 20 20"
              //       xmlns="http://www.w3.org/2000/svg"
              //     >
              //       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              //     </svg>
              //     <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              //       5.0
              //     </span>
              //   </div>
              //   <div className="flex items-center justify-between">
              //     <span className="text-3xl font-bold text-gray-900 dark:text-white">
              //     {ProductItem.price}
              //     </span>
              //     <Link
              //       href="#"
              //       className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              //     >
              //       Add to cart
              //     </Link>
              //   </div>
              // </Card>
            ))}
      </div>
    </div>
  );
}
