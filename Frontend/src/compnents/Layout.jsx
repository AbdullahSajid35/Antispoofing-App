import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="px-[120px]">
      <div className="flex justify-between items-center   mt-[10px] ">
        <h1 className="text-center text-white text-[36px]">
          Face Liveness Detection
        </h1>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
