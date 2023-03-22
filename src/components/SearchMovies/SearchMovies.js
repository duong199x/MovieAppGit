import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useViewport } from "../hooks/useViewport";
import { getSearchMovies, setMovieDetail } from "../store/actions";
const moviesList = [
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4vFsjMKcImBy1a49EkRakvMrgZw.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pl8a4A0JQGr2aHd9RrI0SbewjIr.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ixgnqO8xhFMb1zr8RRFsyeZ9CdD.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/97obFkhpMLrZcQEUCI69v55etNL.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aHUyK2XA76mn9GM36wu2rRKvwB5.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gJnVJ3l4p1GDvGpwFedXhAJG3qE.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/myCEG6C5Nk181jXzBek5MQEXpM2.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/impacXrdofZzhMJHNboodaqFfaM.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iGw6R4e4G07xjffVifFLSN3dEAb.jpg",
];
const useQuery = () => new URLSearchParams(useLocation().search);
function SearchMovies(props) {
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");
  console.log(keywords);
  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [keywords, dispatch]);
  console.log(SearchMovies);
  return (
    <SearchPane>
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            },auto)`,
          }}
        >
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imgUrl = `https://image.tmdb.org/t/p/w500/${
                movie.backdrop_path || movie.poster_path
              }`;
              return (
                <div
                  className="movieItem"
                  key={index}
                  onClick={() => dispatch(setMovieDetail(movie))}
                >
                  <img src={imgUrl} alt={movie.title || movie.name} />
                  <span>{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <NotFound>
          <h1>Your Search for 'key' did not heve any matchs</h1>
        </NotFound>
      )}
    </SearchPane>
  );
}
export default SearchMovies;
const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  background-color: var(--color-background);
  transition: all 0.3s linear;
  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;
    &:hover .movieItem {
      opacity: 0.7;
    }
    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s linear;
      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: var(--color-white);
        font-weight: bold;
      }
    }
  }
`;
const NotFound = styled.div`
  padding: 5rem 8rem;
  color: var(--color-white);
`;
