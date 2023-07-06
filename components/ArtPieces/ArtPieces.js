import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import Image from "next/image";
import Spotlight from "../Spotlight/Spotlight";
import styled from "styled-components";

export default function ArtPieces({
    pieces,
    onToggleFavorite,
    isFavorite,
    artPiecesInfo,
}) {
    console.log({ pieces });

    return (
        <>
            <StyledUl>
                {pieces.map((piece, index) => (
                    <li key={index}>
                        <ArtPiecePreview
                            image={piece.imageSource}
                            title={piece.name}
                            artist={piece.artist}
                            slug={piece.slug}
                            onToggleFavorite={onToggleFavorite}
                            isFavorite={piece.isFavorite}
                        />
                    </li>
                ))}
            </StyledUl>
        </>
    );
}

const StyledUl = styled.ul`
    list-style: none;
    padding-left: 0px;
`;
