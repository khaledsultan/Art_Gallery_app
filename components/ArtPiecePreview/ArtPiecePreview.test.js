import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ArtPiecePreview from "./ArtPiecePreview.js";
const piece = {
    image: "https://example.com/art-piece.jpg",
    artist: "John Doe",
    name: "Untitled",
};

test("renders a image", () => {
    render(
        <ArtPiecePreview
            image={piece.image}
            artist={piece.artist}
            title={piece.name}
        />
    );

    const imageElement = screen.getByRole("img");

    expect(imageElement).toBeInTheDocument();
});

test("renders a h2", () => {
    render(
        <ArtPiecePreview
            image={piece.image}
            artist={piece.artist}
            title={piece.name}
        />
    );

    const headingTowElement = screen.getByText("Untitled");

    expect(headingTowElement).toBeInTheDocument();
});

test("renders a p", () => {
    render(
        <ArtPiecePreview
            image={piece.image}
            artist={piece.artist}
            title={piece.name}
        />
    );

    const paragraphElement = screen.getByText("John Doe");

    expect(paragraphElement).toBeInTheDocument();
});
