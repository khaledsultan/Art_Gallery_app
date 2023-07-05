import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function index({
    data,
    onToggleFavorite,
    isFavorite,
    artPiecesInfo,
}) {
    return (
        <>
            <ArtPieces
                pieces={artPiecesInfo}
                onToggleFavorite={onToggleFavorite}
                isFavorite={isFavorite}
            />
        </>
    );
}
