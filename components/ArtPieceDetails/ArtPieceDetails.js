import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";

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
        <StyledDetails>
            <StyledLink href="/art-pieces">← BACK</StyledLink>
            <StyledImage src={image} height={500} width={800} alt={title} />
            {/* <Link href={`./art-pieces/${slug}`}><h2>{title}</h2><Link/> */}
            <StyledP>{artist}</StyledP>
            <p>{genre}</p>
            <p>{year}</p>
            <FavoriteButton
                onToggleFavorite={onToggleFavorite}
                slug={slug}
                isFavorite={isFavorite}
            />
        </StyledDetails>
    );
}
const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 5px; */
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 10px;
    align-self: flex-start;

    &:hover {
        color: #cddce6;
    }
`;
const StyledImage = styled.img`
    /* border-style: solid;
    border-color: white; */
    border: 4mm ridge rgba(100, 100, 100, 0.6);
`;
const StyledP = styled.p`
    font-size: 30px;
`;
