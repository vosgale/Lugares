import type { NextPage } from "next";
import * as Styled from "../components/styles/index";
import TopBar from "../components/Topbar/intex";

const Home: NextPage = () => {
  return (
    <>
      <TopBar />
      <Styled.CardsContainer />
    </>
  );
};

export default Home;
