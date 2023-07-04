import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import ArtPieces from "./ArtPieces.js";
const piece = {
    image: "https://example.com/art-piece.jpg",
    artist: "John Doe",
    name: "Untitled",
};

test("renders a list", () => {
    render(<ArtPieces pieces={piece} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
});
