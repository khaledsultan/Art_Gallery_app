import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Link from "next/link";
import Image from "next/image";
import Spotlight from "../Spotlight/Spotlight";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece, index) => (
        <Spotlight
          key={index}
          image={piece.imageSource}
          artist={piece.artist}
        />
      ))}
      {pieces.map((piece, index) => (
        <ArtPiecePreview
          key={index}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </>
  );
}
