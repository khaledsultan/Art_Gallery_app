import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
    image,
    title,
    artist,
    year,
    genre,
    slug,
    onToggleFavorite,
    isFavorite,
}) {
    return (
        <>
            <FavoriteButton
                onToggleFavorite={onToggleFavorite}
                slug={slug}
                isFavorite={isFavorite}
            />
            <Link href="/art-pieces">← BACK</Link>
            <Image src={image} height={144} width={144} alt={title} />
            {/* <Link href={`./art-pieces/${slug}`}><h2>{title}</h2><Link/> */}
            <p>{artist}</p>
            <p>{year}</p>
            <p>{genre}</p>
        </>
    );
}
