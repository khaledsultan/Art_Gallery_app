import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Spotlight({ image, artist }) {
    return (
        <>
            <Image
                src="/../../assets/heart.svg"
                height={50}
                width={50}
                alt="fav flag"
            />
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
