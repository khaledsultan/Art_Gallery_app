import Layout from "../components/Layout/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

export default function App({ Component, pageProps }) {
    /*------FAVOURITEBUTTON--------*/
    const [artPiecesInfo, setArtPiecesInfo] = useState([]);

    /*------FETCHING--------*/
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        "https://example-apis.vercel.app/api/art",
        fetcher
    );

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    console.log({ data });

    return (
        <>
            <GlobalStyle />
            <Layout />
            <Component
                {...pageProps}
                data={data}
                // isFavorite={isFavorite}
                // onToggleFavorite={onToggleFavorite}
            />
        </>
    );
}
