import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

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
        <StyledPreview>
            <Link href={`/art-pieces/${slug}`}>
                <StyledImage src={image} height={250} width={250} alt={title} />
            </Link>
            <h2>{title}</h2>
            <p>{artist}</p>
            <FavoriteButton
                onToggleFavorite={onToggleFavorite}
                slug={slug}
                isFavorite={isFavorite}
            />
        </StyledPreview>
    );
}

const StyledPreview = styled.div`
    border-bottom: solid lightgrey 2px;
    /* border-bottom-width: 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
`;

const StyledImage = styled.img`
    border: 4mm ridge rgba(100, 100, 100, 0.6);
    /* box-shadow: grey 10px 0 10px; */
`;
