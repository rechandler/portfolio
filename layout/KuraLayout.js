"use client";
import Popup from "@/components/popup/Popup";
import { kuraUtilit } from "@/utility";
import { Fragment, useEffect } from "react";
import Audio from "./Audio";
import CopyRight from "./CopyRight";
import Cursor from "./Cursor";
import Settings from "./Settings";
const KuraLayout = ({ children }) => {
  useEffect(() => {
    kuraUtilit.dataImage();
    kuraUtilit.imgToSVG();
    kuraUtilit.animation();
  }, []);

  return (
    <Fragment>
      <Popup />
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
