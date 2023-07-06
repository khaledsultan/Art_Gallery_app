import React from "react";
import Image from "next/image";
import { useState } from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

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
        <StyledSpotlight>
            <StyledImage
                src={image}
                height={500}
                width={800}
                alt="random pic from the gallery"
            />
            <StyledP>{artist}</StyledP>
            <FavoriteButton
                onToggleFavorite={onToggleFavorite}
                slug={slug}
                isFavorite={artPiece.isFavorite}
            />
        </StyledSpotlight>
    );
}

const StyledSpotlight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const StyledImage = styled.img`
    border: 4mm ridge rgba(100, 100, 100, 0.6);
`;
const StyledP = styled.p`
    font-size: 30px;
`;
