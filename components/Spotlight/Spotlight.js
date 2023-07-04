import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Spotlight({ image, artist }) {
    return (
        <>
            <Image
                src={image}
                height={144}
                width={144}
                alt="random pic from the gallery"
            />
            <p>{artist}</p>
        </>
    );
}
