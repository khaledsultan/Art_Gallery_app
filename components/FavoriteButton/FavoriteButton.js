import React from "react";
import Image from "next/image";

export default function FavoriteButton({ onToggleFavorite, slug, isFavorite }) {
    // console.log({ isFavorite });
    return (
        <>
            <button onClick={() => onToggleFavorite(slug)}>
                {isFavorite ? "❤️" : "❌"}
            </button>
        </>
    );
}
