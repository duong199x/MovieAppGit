import styled from "styled-components";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function Footer(props) {
  return (
    <StyleFooter>
      <div className="footer">
        <h1 className="footerCopy">
          Copyright <AiOutlineCopyrightCircle /> SonDuong
        </h1>
        <h2 className="email">duongnqs@gmail.com</h2>
      </div>
    </StyleFooter>
  );
}
export default Footer;
const StyleFooter = styled.div`
  .footer {
    text-align: center;
    font-size: 8px;
    background-color: var(--color-gray);
    .footerCopy {
      padding-top: 10px;
    }
    .email {
      padding-bottom: 10px;
    }
  }
`;
