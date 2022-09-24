const FilmCard = ({ id, poster_path, title, release_date, onFilmClick }) => {
  return (
    <div className="group cursor-pointer" onClick={() => onFilmClick(id)}>
      <img
        className="shadow-slate-500 shadow-md group-hover:-translate-y-2 transition-transform duration-150"
        src={poster_path}
        alt={title}
      />
      <h3 className="text-xs md:text-sm uppercase font-bold mt-4 group-hover:text-primaryRed">
        {title}
      </h3>
      <span className="text-xs uppercase font-semibold opacity-75">
        {release_date}
      </span>
    </div>
  );
};

export default FilmCard;
