import React from "react";
import { randomColor } from "../../utils";
import { Link } from "react-scroll";
function MenuItem(props) {
  const { name, Icon, to } = props;
  return (
    <Link
      className="subMenu"
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
    >
      <Icon className="icon" style={{ color: randomColor(1) }} />
      <span style={{ color: randomColor(0.8) }}>{name}</span>
    </Link>
  );
}
export default MenuItem;
