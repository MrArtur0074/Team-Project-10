import { Suspense } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { CircularProgress } from "@mui/material";

const Layout = ({ sectionRefs, children }) => {
  return (
    <div>
      <Navbar sectionRefs={sectionRefs} />
      <Suspense
        fallback={
          <div className="loadingblock">
            <CircularProgress />
          </div>
        }>
        {children}
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
