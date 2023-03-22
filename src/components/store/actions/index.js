import * as Types from "../types";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
const API_KEY = "1050c937f55abafbc77f9bcd6397fba7";
const Base_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("get netflix api error:", err);
  }
};
export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({
      type: Types.GET_TRENDING_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("get TRENDING api error:", err);
  }
};
export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
    );
    dispatch({
      type: Types.GET_TOP_RATED_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("get TOP RATED api error:", err);
  }
};
export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({
      type: Types.GET_ACTION_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("get Action api error:", err);
  }
};
export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({
      type: Types.GET_COMEDY_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("get COMEDY api error:", err);
  }
};
export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({
      type: Types.GET_HORROR_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("get HORROR api error:", err);
  }
};
export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({
      type: Types.GET_ROMANCE_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("get ROMANCE api error:", err);
  }
};
export const getDocumentaries = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispatch({
      type: Types.GET_DOCUMENTARIES_MOVIES,
      payload: result.data.results,
    });
  } catch (err) {
    console.log("get Documentary api error:", err);
  }
};
export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};
export const getSearchMovies = (keyword) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${Base_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`
    );
    dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results });
  } catch (err) {
    console.log("get search movie error:", err);
  }
};
