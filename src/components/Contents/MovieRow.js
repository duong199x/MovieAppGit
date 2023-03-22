import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SmoothHorizontalScrolling } from "../../utils";
import { useViewport } from "../hooks/useViewport";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";
// const movies = [
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4vFsjMKcImBy1a49EkRakvMrgZw.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pl8a4A0JQGr2aHd9RrI0SbewjIr.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ixgnqO8xhFMb1zr8RRFsyeZ9CdD.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/97obFkhpMLrZcQEUCI69v55etNL.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aHUyK2XA76mn9GM36wu2rRKvwB5.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gJnVJ3l4p1GDvGpwFedXhAJG3qE.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/myCEG6C5Nk181jXzBek5MQEXpM2.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/impacXrdofZzhMJHNboodaqFfaM.jpg",
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iGw6R4e4G07xjffVifFLSN3dEAb.jpg",
// ];
function MovieRow(props) {
  const { movies, title, isNetflix, idSection } = props;
  const sliderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);
  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };
  return (
    <MovieRowContainer draggable="false" id={idSection}>
      <h1 className="heading">{title}</h1>
      <MovieSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length}
          ,${
            windowWidth > 1200
              ? "360px"
              : windowWidth > 992
              ? "300px"
              : windowWidth > 768
              ? "250px"
              : "200px"
          }
          )`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isNetflix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  ref={movieRef}
                  draggable="false"
                  onClick={() => handleSetMovie(movie)}
                >
                  <img src={imageUrl} alt="" draggable="false" />
                  <div className="movieName">{movie.title || movie.name}</div>
                </div>
              );
            }
          })}
      </MovieSlider>
      <div className="btnLeft" onClick={handleScrollLeft}>
        <FiChevronLeft />
      </div>
      <div className="btnRight" onClick={handleScrollRight}>
        <FiChevronRight />
      </div>
    </MovieRowContainer>
  );
}
export default MovieRow;

const MovieRowContainer = styled.div`
  background-color: var(--background-color);
  color:var(--color-white)
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  .heading{
    font-size:18px;
    user-select: none;
  }
  .btnLeft{
    position: absolute;
    top:50%;
    left:30px;
    z-index:20;
    transform-origin: center;
    cursor:pointer;
    background-color: rgba(0,0,0,0.5);
    height:100px;
    width:50px;
    border-radius:4px;
    display:flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
    &:hover svg{
        opacity: 1;
        transform:scale(1.2);
    }
    svg{
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
    }
  }
  .btnRight{
    position: absolute;
    top:50%;
    right:30px;
    z-index:20;
    transform-origin: center;
    cursor:pointer;
    background-color: rgba(0,0,0,0.5);
    height:100px;
    width:50px;
    border-radius:4px;
    display:flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
    &:hover svg{
        opacity: 1;
        transform:scale(1.2);
    }
    svg{
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
    }
  }
`;
const MovieSlider = styled.div`
  display: grid;
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;
  &:hover .movieItem {
    opacity: 0.5;
  }
  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    transition: all 0.3s linear;
    user-selector: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    cursor: pointer;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .movieName {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
/*grid-template-columns: repeat(${movies.length}, 360px);
@media screen and (max-width: 1200px) {
  grid-template-columns: repeat(${movies.length}, 300px);
}
@media screen and (max-width: 992px) {
  grid-template-columns: repeat(${movies.length}, 250px);
}
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(${movies.length}, 200px);
}*/
