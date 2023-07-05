import React from "react";
import { useRouter } from "next/router";
import ArtPieces from "../../components/ArtPieces/ArtPieces";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";

export default function OnePiece({
    data,
    onToggleFavorite,
    artPiecesInfo,
    isFavorite,
}) {
    const router = useRouter();
    const { slug } = router.query;

    const thePiece = artPiecesInfo.find((piece) => piece.slug === slug);
    // console.log({ thePiece });

    if (!thePiece) {
        // Handle case when thePiece is not found
        return <div>Art piece not found.</div>;
    }

    return (
        <>
            <ArtPieceDetails
                image={thePiece.imageSource}
                title={thePiece.name}
                artist={thePiece.artist}
                year={thePiece.year}
                genre={thePiece.genre}
                slug={thePiece.slug}
                onToggleFavorite={onToggleFavorite}
                isFavorite={thePiece.isFavorite}
            />
        </>
    );
}
