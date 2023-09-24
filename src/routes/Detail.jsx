import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [selMovie, setSelMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setSelMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>
        {loading ? (
          <h1>선택하신 영화를 조회 중입니다...</h1>
        ) : (
          <div>
            <h3>{selMovie.title}</h3>
            <img src={selMovie.medium_cover_image} />
            <ul>
              {selMovie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        )}
      </h1>
    </div>
  );
}
