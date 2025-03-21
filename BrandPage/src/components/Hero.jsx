const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>Timeless Elegance, Crafted for You</h1>
                <p>
                    Discover a captivating collection of
                    exquisite jewellery designed to celebrate
                    life’s precious moments. From delicate everyday
                    pieces to statement-making treasures, our collection
                    embodies elegance, artistry, and timeless beauty.
                    e believe jewellery is more than just an accessory—
                    it’s a reflection of your unique story. Our meticulously 
                    crafted pieces blend modern sophistication with classic
                    charm, making every piece as special as the person wearing it.

                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/bg.jpg" height={600} alt = "hero-image" />
            </div>
        </main>
    )
}

export default HeroSection;     