import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
