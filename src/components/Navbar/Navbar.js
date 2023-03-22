import NetflixLogo from "../../assets/images/google-logo-transparent.png";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useScrollY } from "../hooks/useScrollY";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar(props) {
  const [scrollY] = useScrollY();
  const [keyWords, setKeywords] = useState();
  const navigation = useNavigate();
  const handleChangeInput = (event) => {
    let keywords = event.target.value;
    setKeywords(keywords);
    keywords.length > 0
      ? navigation(`/search?keywords=${keywords.trim()}`)
      : navigation(`/`);
  };
  const goHome = () => {
    navigation(`/`);
    setKeywords("");
  };
  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="logo" onClick={goHome}>
          <img src={NetflixLogo} />
        </div>
        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input
            type="test"
            placeholder="Input title, genres, poeple"
            onChange={handleChangeInput}
            value={keyWords}
          />
        </div>
      </div>
    </Navigation>
  );
}
export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }

  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    .logo {
      width: 120px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      &:hover .iconSearch {
        color: var(--color-white);
      }
      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(20px) translateY(10px);
        color: #bbb;
      }
      input {
        font-size: 14px;
        border: 1px solid #fff;
        color: var(--color-white);
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background-color: var(--color-background);
        transition: width 0.5s;
        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
