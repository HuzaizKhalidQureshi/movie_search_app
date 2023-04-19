import "./movieComponent.css";

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className="movieContainer"
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={Poster} alt={Title} />

      <span className="movieName">{Title}</span>
      <div className="infoColumn">
        <span className="movieInfo">Year : {Year}</span>
        <span className="movieInfo">Type : {Type}</span>
      </div>
    </div>
  );
};
export default MovieComponent;
