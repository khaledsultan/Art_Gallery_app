import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";

function pickRandomImage(pieces) {
    const newIndex = Math.floor(Math.random() * pieces.length);
    console.log(newIndex);

    return pieces[newIndex];
}

export default function HomePage() {
    const { data, error, isLoading } = useSWR(
        "https://example-apis.vercel.app/api/art"
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    // console.log({ data });
    const randomImage = pickRandomImage(data);
    // console.log({ randomImage });

    return (
        <>
            <Spotlight
                image={randomImage.imageSource}
                artist={randomImage.artist}
            />
            <ArtPieces pieces={data} />
        </>
    );
}
