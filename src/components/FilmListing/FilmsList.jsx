import FilmCard from "./FilmCard";
import FilmCardSkeleton from "./FilmCardSkeleton";

const FilmsList = ({ className, remFilms, onFilmClick }) => {
  return (
    <ul className={`${className} films-grid`}>
      {remFilms.length == 0 &&
        new Array(4).fill(0).map((_, index) => {
          return (
            <li key={index}>
              <FilmCardSkeleton />
            </li>
          );
        })}
      {remFilms.map((film) => {
        return (
          <li key={film.id}>
            <FilmCard
              id={film.id}
              poster_path={film.poster_path}
              title={film.title}
              release_date={film.release_date}
              onFilmClick={onFilmClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FilmsList;
