import TopBar from "./Topbar/intex";
import * as Styled from "./Styles";
import CardsList from "./CardsList/intex";
import { ToastProvider } from "../contexts/ToastContext";
function Layout() {
  return (
    <>
      <ToastProvider>
        <Styled.Layout>
          <TopBar />
          <CardsList />
        </Styled.Layout>
      </ToastProvider>
    </>
  );
}

export default Layout;
