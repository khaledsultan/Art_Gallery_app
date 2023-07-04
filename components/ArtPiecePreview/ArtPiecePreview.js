import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, artist, title }) {
    //   console.log({ image });
    return (
        <>
            <Image src={image} height={144} width={144} alt={title} />
            <h2>{title}</h2>
            <p>{artist}</p>
        </>
    );
}
