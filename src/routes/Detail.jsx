import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [selMovie, setSelMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setSelMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>{selMovie.title}</h1>
      <img src={selMovie.medium_cover_image} />
    </div>
  );
}
