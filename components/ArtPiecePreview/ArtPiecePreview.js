import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
    image,
    artist,
    title,
    slug,
    onToggleFavorite,
    isFavorite,
}) {
    // console.log({ slug });
    return (
        <>
            <FavoriteButton
                onToggleFavorite={onToggleFavorite}
                slug={slug}
                isFavorite={isFavorite}
            />

            <Link href={`/art-pieces/${slug}`}>
                <Image src={image} height={144} width={144} alt={title} />
            </Link>
            <h2>{title}</h2>
            <p>{artist}</p>
            <hr />
        </>
    );
}
