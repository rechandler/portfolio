"use client";
import { kuraUtilit } from "@/utility";
import { Fragment, useEffect } from "react";
import CopyRight from "./CopyRight";
const KuraLayout = ({ children }) => {
  useEffect(() => {
    kuraUtilit.dataImage();
    kuraUtilit.imgToSVG();
    kuraUtilit.animation();
  }, []);

  return (
    <Fragment>
      <div
        className="kura_tm_all_wrap w-full h-auto clear-both float-left relative"
      >
        {children}
        {/* COPYRIGHT */}
        <CopyRight />
        {/* /COPYRIGHT */}
      </div>
    </Fragment>
  );
};
export default KuraLayout;
