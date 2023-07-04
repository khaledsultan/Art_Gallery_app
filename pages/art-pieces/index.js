import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function index({ data }) {
    return (
        <>
            <ArtPieces pieces={data} />
        </>
    );
}
