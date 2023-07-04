import ArtPieces from "../components/ArtPieces/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({ data }) {
    if (!data) {
        return;
    }
    function pickRandomImage() {
        const newIndex = Math.floor(Math.random() * data.length);
        console.log(newIndex);

        return data[newIndex];
    }
    const randomImage = pickRandomImage();

    console.log({ randomImage });
    return (
        <>
            <Spotlight
                image={randomImage.imageSource}
                artist={randomImage.artist}
            />

            {/* <ArtPieces pieces={data} /> */}
        </>
    );
}
