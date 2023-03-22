import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../store/actions";
import MovieRow from "./MovieRow";
import { FaArrowAltCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { animateScroll } from "react-scroll";
import { useScrollY } from "../hooks/useScrollY";
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
const ScrollToTop = () => {
  animateScroll.scrollToTop();
};
function Contents(props) {
  const dispatch = useDispatch();
  const [scrollY] = useScrollY();
  const {
    NetflixOriginals,
    TrendingMovies,
    TopRatedMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(Action.getNetflixOriginals());
    dispatch(Action.getTrendingMovies());
    dispatch(Action.getTopRatedMovies());
    dispatch(Action.getActionMovies());
    dispatch(Action.getComedyMovies());
    dispatch(Action.getHorrorMovies());
    dispatch(Action.getRomanceMovies());
    dispatch(Action.getDocumentaries());
  }, [dispatch]);

  return (
    <div>
      <MovieRow
        movies={NetflixOriginals}
        title="Netflix Original"
        isNetflix={true}
        idSection="netFlix"
      />
      <MovieRow
        movies={TrendingMovies}
        title="Trending Movies"
        isNetflix={true}
        idSection="trending"
      />
      <MovieRow
        movies={TopRatedMovies}
        title="Top Rate Movies"
        idSection="topRate"
      />
      <MovieRow
        movies={ActionMovies}
        title="Action Movies"
        idSection="action"
      />
      <MovieRow
        movies={ComedyMovies}
        title="Comedy Movies"
        idSection="comedy"
      />
      <MovieRow
        movies={HorrorMovies}
        title="Horror Movies"
        idSection="horror"
      />
      <MovieRow
        movies={RomanceMovies}
        title="Romance Movies"
        idSection="romance"
      />
      <MovieRow
        movies={Documentaries}
        title="Documentaries Movies"
        idSection="documentaries"
      />
      <GoToTop
        onClick={() => ScrollToTop()}
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}
      >
        <FaArrowAltCircleUp />
      </GoToTop>
    </div>
  );
}
export default Contents;
const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  @media screen and (max-width: 600px) {
    right: 40px;
  }
`;
