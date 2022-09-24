import logo from "../../assets/logo-marvel-studios.svg";
import CountdownTimer from "../countdown-timer/CountdownTimer";
import Badge from "./Badge";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Hero = ({ className, displayedFilm }) => {
  return (
    <div
      className={`${className} relative bg-no-repeat bg-cover bg-center px-8 sm:px-11 text-white sm:clip-path`}
      style={{
        backgroundColor: "#000",
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%), ${
          displayedFilm ? `url(${displayedFilm.backdrop_path})` : ""
        }`,
      }}
    >
      <header className="container mx-auto flex justify-center py-9">
        <img
          className="w-36 sm:w-40 md:w-48 lg:w-52"
          src={logo}
          alt="Marvel Studios"
        />
      </header>
      <div className="container mx-auto pt-6 sm:pt-10 pb-12 sm:pb-24">
        {/* <Badge
          text={
            displayedFilm ? (
              displayedFilm.isMovie ? (
                "Movie"
              ) : (
                "TV show"
              )
            ) : (
              <Skeleton width="60px" />
            )
          }
          bg={
            displayedFilm
              ? displayedFilm.isMovie
                ? "bg-mainYellow"
                : "bg-mainBlue"
              : ""
          }
        /> */}
        <h1 className="mt-3 font-bebas drop-shadow-lg text-5xl xl:text-7xl sm:text-6xl">
          {displayedFilm ? displayedFilm.title : <Skeleton width="50%" />}
        </h1>
        <CountdownTimer
          className="mt-6"
          targetDate={
            displayedFilm ? new Date(displayedFilm.release_date) : undefined
          }
        />
        <p className="complete-p">
          {displayedFilm ? (
            displayedFilm.overview
          ) : (
            <Skeleton count="3" width="80%" />
          )}{" "}
          {displayedFilm && (
            <a
              className="link"
              href="https://www.marvel.com/movies"
              rel="nonopener noreferrer"
              target="_blank"
            >
              More Info
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default Hero;
