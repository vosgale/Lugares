import TopBar from "./Topbar/intex";
import * as Styled from "./Styles";
import CardsList from "./CardsList/intex";

function Layout() {
  return (
    <>
      <Styled.Layout>
        <TopBar />
        <CardsList />
      </Styled.Layout>
    </>
  );
}

export default Layout;
