import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer";
import axios from "axios";
import FilmsList from "./components/FilmListing/FilmsList";
import { SkeletonTheme } from "react-loading-skeleton";

async function fetchUpcommingFilms() {
  const upcomming = [];

  let date = "";
  do {
    let url = `https://www.whenisthenextmcufilm.com/api${
      date ? `?date=${date}` : ""
    }`;

    await axios
      .get(url)
      .then((response) => {
        const current = response.data;
        delete current["following_production"];
        date = current["release_date"];
        if (date) upcomming.push(current);
      })
      .catch((error) =>
        upcomming.push(`Error fetching this movie/show: ${error}`)
      );
  } while (date);

  return upcomming;
}

async function fetchFilmDetails(title) {
  const API_KEY = "b8656aad79d3af2e20690f7c808f7211";
  title = title.trim().toLowerCase().replace(" ", "+");
  const details_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`;

  return axios
    .get(details_url)
    .then((response) => (response = response.data.results[0]));
}

function App() {
  const [films, setFilms] = useState([]);
  const [currFilmIndex, setCurrFilmIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const upcommingFilms = await fetchUpcommingFilms();

      // Taking only relevant data that will be used ignoring the others
      const finalPromises = upcommingFilms.map(async (film) => {
        const details = await fetchFilmDetails(film.title);

        return {
          title: film.title,
          overview: film.overview,
          release_date: film.release_date,
          isMovie: film.type == "Movie",
          id: details.id,
          poster_url: film.poster_url,
          backdrop_path:
            "https://image.tmdb.org/t/p/original" + details.backdrop_path,
        };
      });

      setFilms(await Promise.all(finalPromises));
    })();
  }, []);

  const filmClickHandler = (id) => {
    const _ = films.filter((film, index) => {
      if (film.id == id) {
        window.scrollTo({
          top: 0,
        });

        setCurrFilmIndex(index);
        return film;
      }
    });
  };

  return (
    <div className="App flex flex-col min-h-[100vh]">
      <SkeletonTheme baseColor="#202020" highlightColor="#282828">
        <Hero
          className="outer-container"
          displayedFilm={films[currFilmIndex]}
        />
      </SkeletonTheme>
      <div className="outer-container grow px-8 sm:px-11">
        <section className="container mx-auto py-9 ">
          <h2 className="text-3xl md:text-4xl font-bebas mb-6">
            More upcomming
          </h2>
          <FilmsList
            onFilmClick={filmClickHandler}
            remFilms={films.filter((film) => {
              return film.id != films[currFilmIndex].id;
            })}
          />
        </section>
      </div>

      <Footer className="outer-container" />
    </div>
  );
}

export default App;
