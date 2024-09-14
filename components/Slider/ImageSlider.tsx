"use client";

import React, { cache, CSSProperties, useEffect, useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";

export default function ImageSlider({
  url,
  limit,
  page,
  className,
  style,
}: {
  url: string;
  limit: string;
  page: string;
  className: string;
  style: CSSProperties;
}) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // const [image,setImage]=useState([])
  // const [image,setImage]=useState([])

  async function fetchImage(getUrl: any) {
    const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

    const data = await res.json();

    if (data) {
      setImages(data);
    }
  }

  console.log("Images == > ", images);

  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="flex flex-col mb-60">
      <h6 className="text-center my-5"> Image Slider</h6>

      <div className="container relative flex justify-center items-center w-full h-[50vh]">
        <ArrowLeft
          onClick={handlePrevious}
          className="bi bi-arrow-left arrow absolute w-[2rem] h-[2rem] text-blue-500 bg-white rounded-full shadow-lg left-2 "
        />
        {images && images.length > 0
          ? images.map((x: any, index) => (
              <img
                src={x.download_url}
                alt={x.download_url}
                key={x.id}
                className={
                  currentSlide === index
                    ? "current-image border-r-2 shadow-xl w-full h-[50rem]"
                    : " hidden"
                }
              />
            ))
          : null}

        <ArrowRight
          onClick={handleNext}
          className="bi bi-arrow-right arrow absolute w-[2rem] h-[2rem] text-blue-500 bg-white rounded-full shadow-lg right-2"
        />

        <div className="circle-indicator flex justify-evenly absolute -bottom-1/4 w-[10rem]">
          {images && images.length > 0
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator bg-white h-[1rem] w-[1rem] rounded-md border-none outline-none my-0 cursor-pointer"
                      : "bg-gray-700 h-[1rem] w-[1rem] rounded-md border-none outline-none my-0 cursor-pointer"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
