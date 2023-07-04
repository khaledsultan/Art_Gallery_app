import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Spotlight({ image, artist }) {
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    const newIndex = Math.floor(Math.random() * image.length);
    setRandomIndex(newIndex);
  }, [image]);

  const { image, artist } = image[randomIndex];
  console.log({ Image, artist });

  return (
    <>
      <ul>
        <li>
          <Image src={image} height={144} width={144} />
        </li>
        <li>
          <p>{artist}</p>
        </li>
      </ul>
    </>
  );
}
