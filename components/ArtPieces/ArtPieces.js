import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import Image from "next/image";
import Spotlight from "../Spotlight/Spotlight";

export default function ArtPieces({ pieces }) {
    return (
        <>
            <ul>
                {pieces.map((piece, index) => (
                    <li key={index}>
                        <ArtPiecePreview
                            image={piece.imageSource}
                            title={piece.name}
                            artist={piece.artist}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}
