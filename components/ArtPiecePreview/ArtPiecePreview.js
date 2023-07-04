import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, artist, title }) {
  //   console.log({ image });
  return (
    <>
      <ul>
        <li>
          <Image src={image} height={144} width={144} alt={title} />
        </li>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <p>{artist}</p>
        </li>
      </ul>
    </>
  );
}
