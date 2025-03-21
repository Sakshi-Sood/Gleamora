const Navigation = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src = "/images/diamond.png" alt = "logo"/>
                <div className="brand-info">
                    <h1 className="brand-name">Gleamora</h1>
                    <p className="tagline">Where Elegance Shines</p>
                </div>
            </div>
            <ul>
                <li href = "#"> Home </li>
                <li href = "#"> Location </li>
                <li href = "#"> About </li>
                <li href = "#"> Contact </li>
            </ul>
            <button> Sign Up </button>
        </nav>
    );
}

export default Navigation;