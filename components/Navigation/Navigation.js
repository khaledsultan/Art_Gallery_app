import React from "react";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <Link href="/">HOME PAGE</Link> |{" "}
            <Link href="/art-pieces">ALL PIECES</Link>
        </nav>
    );
}
