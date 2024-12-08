import globeUrl from "../images/globe.png"

export default function Header() {
    return (
        <header>
            <img src={globeUrl} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}