import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function FavoriteButton({ onToggleFavorite, slug, isFavorite }) {
    // console.log({ isFavorite });
    return (
        <>
            <StyledButton onClick={() => onToggleFavorite(slug)}>
                {isFavorite ? "❤️" : "🤍"}
            </StyledButton>
        </>
    );
}

const StyledButton = styled.button`
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    color: #ffffff;
    font-size: 30px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    &:hover {
        background: #cddce6;
        text-decoration: none;
    }
`;
