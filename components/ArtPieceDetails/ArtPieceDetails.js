import React from "react";
import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
    return (
        <>
            <Image src={image} height={144} width={144} alt={title} />
            <h2>{title}</h2>
            <p>{artist}</p>
            <p>{year}</p>
            <p>{genre}</p>
        </>
    );
}
