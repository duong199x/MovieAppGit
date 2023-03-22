import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import MenuItem from "./MenuItem";
import styled from "styled-components";
function Menus(props) {
  return (
    <MenusPanel>
      <MenuItem name="Netflix" Icon={SiNetflix} to="netFlix" />
      <MenuItem name="Trending" Icon={FaHotjar} to="trending" />
      <MenuItem name="Top rated" Icon={FaStar} to="topRate" />
      <MenuItem name="Actions movies" Icon={GiNinjaHeroicStance} to="action" />
      <MenuItem name="Comedy movies" Icon={MdTheaterComedy} to="comedy" />
      <MenuItem name="Horror movies" Icon={GiGhost} to="horror" />
      <MenuItem name="Romance movies" Icon={GiRomanToga} to="romance" />
      <MenuItem name="Documentaries" Icon={GiBandageRoll} to="documentaries" />
    </MenusPanel>
  );
}
export default Menus;
const MenusPanel = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 44px;
  padding: 4px 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;
  &:hover {
    width: 180px;
    background: rgba(0, 0, 0, 0.6);
  }
  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    left: 2px;
    padding: 4px 6px;
    cursor: pointer;
  }
  .icon {
    font-size: 30px;
    margin-right: 8px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    &:hover {
      color: #fff;
    }
  }
`;