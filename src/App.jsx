import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer";
import axios from "axios";
import FilmsList from "./components/FilmListing/FilmsList";
import { SkeletonTheme } from "react-loading-skeleton";

// [1] Fetches all movies by Marvel Studios (first page only)
async function fetchMarvelFilms() {
  const API_KEY = "b8656aad79d3af2e20690f7c808f7211";
  const COMPANY_ID = "420";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&page=1&with_companies=${COMPANY_ID}`;

  const response = await axios.get(url);
  return response.data.results;
}

// [2] Extracts only the upcomming films which belongs to superheroes genre
async function extractUpcomming(films) {
  const futureDated = (film) => {
    return new Date(film.release_date) > Date.now();
  };

  const superheroesFilm = (film) => {
    for (let id of film.genre_ids) {
      if ([12, 14, 28, 878].includes(id)) return true;
    }

    return false;
  };

  return films.filter((film) => futureDated(film) && superheroesFilm(film));
}

// [3] Filters the data we need from the film object
function filterFilmData(film) {
  return {
    title: film.title,
    overview: film.overview,
    release_date: film.release_date,
    isMovie: film.type == "Movie",
    id: film.id,
    poster_path: "https://image.tmdb.org/t/p/w342" + film.poster_path,
    backdrop_path: "https://image.tmdb.org/t/p/original" + film.backdrop_path,
  };
}

function App() {
  const [films, setFilms] = useState([]);
  const [currFilmIndex, setCurrFilmIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const start = Date.now();

      const allFilms = await fetchMarvelFilms();
      const upcommingFilms = await extractUpcomming(allFilms);
      const MinifiedFilms = upcommingFilms.map((film) => filterFilmData(film));
      const reversedFilms = MinifiedFilms.reverse();
      setFilms(reversedFilms);

      const end = Date.now();
      console.log(`Execution time: ${end - start} ms`);
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
      {/* Hero */}
      <SkeletonTheme baseColor="#202020" highlightColor="#282828">
        <Hero
          className="outer-container"
          displayedFilm={films[currFilmIndex]}
        />
      </SkeletonTheme>

      {/* Films List */}
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

      {/* Footer */}
      <Footer className="outer-container" />
    </div>
  );
}

export default App;
