"use client";

import React from "react";

import { useAppSelector, useAppDispatch } from "@/redux/store";

import { searchPost, categoryPost } from "@/redux/postSlice";
export default function search() {
  const dispatch = useAppDispatch();

  return (
    <ul className="flex flex-col gap-2 min-w-[350px] min-h-screen mt-5 rounded shadow-2xl border border-gray-200 pt-10">
      <input
        type="search"
        name="search"
        id=""
        className="focus:outline-1 w-30 mx-auto rounded-full"
        placeholder="Search"
        // onChange={handleSearch}
        onChange={(e: any) => {
          dispatch(searchPost(e.target.value));
        }}
      />

      <li>
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              <img className="w-6 h-6 rounded-lg" src="/favicon.ico" alt="" />

              <span>Filters</span>
            </span>
          </summary>

          <article className="px-4 pb-4">
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex gap-2">
                <a href="http://127.0.0.1:8000/user/dashboard">Dashboard</a>
              </li>

              <li className="flex gap-2">
                <a href="http://127.0.0.1:8000/user/study-lists">Study Lists</a>
              </li>

              <li className="flex gap-2">
                
                <a href="http://127.0.0.1:8000/user/contribution">
                  Your contribution
                </a>
              </li>

              <li className="flex gap-2">
               
                <a href="http://127.0.0.1:8000/user/settings">Settings</a>
              </li>

             
            </ul>
          </article>
        </details>
      </li>

      <li>
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg> */}

              <span>Recent Documents</span>
            </span>
            {/* <svg
              className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg> */}
          </summary>

          <article className="px-4 pb-4">
            <ul className="flex flex-col gap-1 pl-2">
              <li>
                <a href="">Document title</a>
              </li>
              <li>
                <a href="">Document title</a>
              </li>
              <li>
                <a href="">Document title</a>
              </li>
            </ul>
          </article>
        </details>
      </li>

      <li>
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex gap-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg> */}
              <span>Popular courses</span>
            </span>
            {/* <svg
              className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg> */}
          </summary>

          <article className="px-4 pb-4">
            <ul className="flex flex-col gap-1 pl-2">
              <li>
                <a href="">Course title</a>
              </li>
              <li>
                <a href="">Course title</a>
              </li>
              <li>
                <a href="">Course title</a>
              </li>
            </ul>
          </article>
        </details>
      </li>
    </ul>
  );
}
