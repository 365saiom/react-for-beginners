import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [selMovie, setSelMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setLoading(true);
    setSelMovie(json.data.movie);
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
            <h1>{selMovie.title}</h1>
            <img src={selMovie.medium_cover_image} />
          </div>
        )}
      </h1>
    </div>
  );
}