import Color from "color";
import { CSSProperties, useState } from "react";

import { useSettings } from "@/store/settingStore";
import {
  NAV_COLLAPSED_WIDTH,
  NAV_WIDTH,
  HEADER_HEIGHT,
  OFFSET_HEADER_HEIGHT,
} from "./config";

import { ThemeLayout } from "#/enum";
type Props = {
  className?: string;
  offsetTop?: boolean;
};

function Header({ className = "", offsetTop = false }: Props) {
  const { themeLayout, breadCrumb } = useSettings();

  const headerStyle: CSSProperties = {
    position: themeLayout === ThemeLayout.Horizontal ? "relative" : "fixed",
    borderBottom:
      themeLayout === ThemeLayout.Horizontal
        ? `1px dashed ${Color("#000").alpha(0.6).toString()}`
        : "",
    backgroundColor: Color("#000").alpha(1).toString(),
  };

  if (themeLayout === ThemeLayout.Horizontal) {
    headerStyle.width = "100vw";
  } else if (2 > 1) {
    headerStyle.right = "0px";
    headerStyle.left = "auto";
    headerStyle.width = `calc(100% - ${
      themeLayout === ThemeLayout.Vertical ? NAV_WIDTH : NAV_COLLAPSED_WIDTH
    }px)`;
  } else {
    headerStyle.width = "100vw";
  }

  return (
    <>
      <header className={`z-20 w-full ${className}`} style={headerStyle}>
        <div
          className="flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
          style={{
            height: offsetTop ? OFFSET_HEADER_HEIGHT : HEADER_HEIGHT,
            transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        >
          11111111
        </div>
      </header>
    </>
  );
}

export default Header;
