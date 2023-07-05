import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, artist, title, slug }) {
    console.log({ slug });
    return (
        <>
            <Link href={`/art-pieces/${slug}`}>
                <Image src={image} height={144} width={144} alt={title} />
            </Link>
            <h2>{title}</h2>
            <p>{artist}</p>
            <hr />
        </>
    );
}
