import styled from "styled-components";
import Button from "@mui/material/Button";
interface Props {
  visible: Boolean;
}
//TopBar=================================================
export const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
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
    margin-top: 85px;
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
export const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const CardsContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 288px); */
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 50px 30px;
  justify-content: center;
`;
export const Card = styled.div`
  /* height: 16.361vw; */
  min-height: 250px;
  min-width: 250px;
  /* width: 16.361vw; */
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  flex-direction: column;
  padding: 14px 30px;
  .card__header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #ABABAB;
  }
  .card__flag-container{
     height: 100%;
     img{
       object-fit: contain;
     }
     h3{
       font-weight: 700;
       color:#4F9419;
       margin: 16px 0 10px;
     }
  }
`;
