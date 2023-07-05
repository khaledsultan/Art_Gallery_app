import Layout from "../components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function App({ Component, pageProps }) {
    /*------FETCHING--------*/
    const { data, error, isLoading } = useSWR(
        "https://example-apis.vercel.app/api/art",
        fetcher
    );
    /*------FAVOURITEBUTTON--------*/
    const updatedData = data?.map((item) => ({ ...item, isFavorite: false }));
    // console.log("updatedData", updatedData);
    const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
        "art-piece-info",
        { defaultValue: updatedData }
    );

    // console.log(updatedData);
    function onToggleFavorite(slug) {
        setArtPiecesInfo(
            artPiecesInfo.map((pieceInfo) =>
                pieceInfo.slug === slug
                    ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
                    : pieceInfo
            )
        );
    }
    // setFavoritePieces((favoritePieces) =>
    //     favoritePieces.filter((artPieceInfo) => artPieceInfo.isFavorite == true)
    // );

    if (!updatedData) {
        return;
    }
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    return (
        <>
            <GlobalStyle />
            <Layout />
            <Component
                {...pageProps}
                data={updatedData}
                // ------------
                artPiecesInfo={artPiecesInfo || []}
                // ------------
                // artPiecesInfo={artPiecesInfo ? artPiecesInfo : []}
                isFavorite={artPiecesInfo.isFavorite}
                onToggleFavorite={onToggleFavorite}
            />
        </>
    );
}
