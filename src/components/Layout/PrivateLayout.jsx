import { Suspense } from "react";
import SideBar from "./SideBar/SideBar";
import { CircularProgress } from "@mui/material";

const PrivateLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <SideBar />
      <Suspense
        fallback={
          <div className="loadingblock">
            <CircularProgress />
          </div>
        }>
        {children}
      </Suspense>
    </div>
  );
};

export default PrivateLayout;
