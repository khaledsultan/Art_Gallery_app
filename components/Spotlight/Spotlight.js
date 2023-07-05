import React from "react";
import Image from "next/image";
import { useState } from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
    image,
    artist,
    slug,
    onToggleFavorite,
    artPiecesInfo,
}) {
    // console.log("artPiecesInfo", artPiecesInfo);
    const artPiece = artPiecesInfo?.find((item) => item.slug === slug);
    // ------------
    if (!artPiece) {
        return null;
    }
    // ------------
    // const { isFavorite } = artPiece;
    // console.log({ artPiece });
    return (
        <>
            <FavoriteButton
                onToggleFavorite={onToggleFavorite}
                slug={slug}
                isFavorite={artPiece.isFavorite}
            />
            <Image
                src={image}
                height={144}
                width={144}
                alt="random pic from the gallery"
            />
            <p>{artist}</p>
        </>
    );
}
