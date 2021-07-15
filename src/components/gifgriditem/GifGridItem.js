import React from "react";
import style from "./GifGridItem.module.css";

export const GifGridItem = ({
  slug,
  original_still,
  user,
  avatar_url,
  title,
  url,
}) => {
  return (
    <>
      {/* <div className="animate__animated animate__fadeIn"> */}
      <div className={`${style.card}`}>
        <img src={url} alt={title} className={style.cardImg} />
        <div className={style.user}>
          <a href="/" className={style.userWrapper}>
            <img
              src={avatar_url}
              alt={avatar_url}
              className={style.avatar_url}
            />
            <p className={style.username}>{user}</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={original_still}
            className={style.openGif}
          >
            abrir
          </a>
        </div>
      </div>
    </>
  );
};
