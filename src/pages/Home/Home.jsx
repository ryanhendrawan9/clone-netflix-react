import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero_banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero_title" className="caption-img" />
          <p>
            After a masked gang kills a hitman's family and leaves him in a coma
            for 12 years, he awakens to seek revenge. Music by Tomoyasu Hotei of
            "Kill Bill" fame.
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="play_icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="info_icon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Top Searches"} category={"top_rated"} />
        <TitleCards title={"New on Netflix"} category={"popular"} />
        <TitleCards title={"Award-Winning TV Shows"} category={"upcoming"} />
        <TitleCards
          title={"Today's Top Picks for You"}
          category={"now_playing"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
