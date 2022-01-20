import styled from "styled-components";
import Button from "@mui/material/Button";
interface Props {
  visible: Boolean;
}
//TopBar=================================================
export const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  padding: 0 4vw;
  background-color: #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  img {
    object-fit: contain;
    width: 152px;
  }
  .hamburger-react {
    display: none;
  }
  @media (max-width: 600px) {
    .hamburger-react {
      display: flex;
      color: #ffffff;
      z-index: 20;
    }
  }
`;
export const FormContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  background-color: #4f9419;
  height: 203px;
  width: 100%;
  padding: 70px 4.861vw 60px 4.861vw;
  form {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    column-gap: 2.361vw;
    grid-template-columns: 21.042vw 31.597vw 16.528vw 14.097vw;
  }
  @media (max-width: 600px) {
    ${({ visible }) =>
      !visible &&
      `
    transform: translateX(1000px);
  `}
    position: fixed;
    height: calc(100vh - 85px);
    transition: 0.5s ease;
    display: flex;
    padding: 0 4.861vw;
    form {
      display: grid;
      grid-template-columns: 80%;
      row-gap: 50px;
    }
  }
`;
export const Btn = styled(Button)`
  background-color: #006c18;
  height: 49px;
  border-radius: 7px;
  text-transform: capitalize;
  font-size: 18px;
  &:hover {
    background-color: #01831e;
  }
`;

export const CardsContainer = styled.section`
width: 100%;
height: calc(100vh - 288px);
border: 2px solid red;
`;
