import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../gifgriditem/GifGridItem";
import { ImSpinner8 } from "react-icons/im";
import { BsChevronCompactRight } from "react-icons/bs";
import style from "./GifGrid.module.css";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className={style.searchMatch}>
        {category}
        <BsChevronCompactRight />
      </h3>

      {loading && (
        <div className="fixed z-40 top-0 left-0 w-full h-full flex items-center justify-center">
          <ImSpinner8 className="animate-spin w-20 h-20" />
        </div>
      )}

      <div className={style.cardContent}>
        {images?.map((img) => (
          <GifGridItem
            key={img.id}
            {...img}
            // img={img}
          />
        ))}
      </div>
    </>
  );
};
