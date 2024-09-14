import Image from "next/image";
import Carousel from "@/components/carousel";

import Accordian from "@/components/accordian";
import ImageSlider from "@/components/Slider/ImageSlider";

export default function Home() {
  return (
    <div className="flex flex-col">
    

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"8"}
        className="min-h-screen "
        style={{ marginTop: "10rem" }}
      />

      <div className="flex-col my-16 md:flex md:flex-row gap-2 mx-10 ">
        <Accordian />
        <Accordian />
      </div>

        <Carousel />
    </div>
  );
}
