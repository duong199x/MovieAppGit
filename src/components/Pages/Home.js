import Intro from "../Intro/Intro";
import Contents from "../Contents/Contents";
import Menus from "../Menus/Menus";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(
    () => setIsShowMovieDetail(MovieDetail ? true : false),
    [MovieDetail]
  );
  return (
    <div>
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
    </div>
  );
}
export default Home;
