import styled from "styled-components";
import { useScroll } from "framer-motion";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";

// import Nav from "./nav";
import Main from "./main";
import Header from "./header";

import { ThemeMode } from "#/enum";

function DashboardLayout() {
  const mainEl = useRef(null);
  const { scrollY } = useScroll({ container: mainEl });

  /**
   * y轴是否滚动
   */
  const [offsetTop, setOffsetTop] = useState(false);
  const onOffsetTop = useCallback(() => {
    scrollY.on("change", (scrollHeight) => {
      if (scrollHeight > 0) {
        setOffsetTop(true);
      } else {
        setOffsetTop(false);
      }
    });
  }, [scrollY]);

  useEffect(() => {
    console.log("onOffsetTop");
    onOffsetTop();
  }, [onOffsetTop]);

  return (
    <StyleWrapper>
      <div
        className={`flex h-screen overflow-hidden `}
        style={{
          color: "#fff",
          background: "#000",
          transform:
            "color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      >
        <Suspense fallback={<div>loading...</div>}>
          <Header></Header>

          <Main ref={mainEl} offsetTop={offsetTop} />
        </Suspense>
      </div>
    </StyleWrapper>
  );
}

export default DashboardLayout;

const StyleWrapper = styled.div<{ $themeMode?: ThemeMode }>`
  /* 设置滚动条的整体样式 */
  ::-webkit-scrollbar {
    width: 8px; /* 设置滚动条宽度 */
  }

  /* 设置滚动条轨道的样式 */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: ${(props) =>
      props.$themeMode === ThemeMode.Dark ? "#2c2c2c" : "#FAFAFA"};
  }

  /* 设置滚动条滑块的样式 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${(props) =>
      props.$themeMode === ThemeMode.Dark ? "#6b6b6b" : "#C1C1C1"};
  }

  /* 设置鼠标悬停在滚动条上的样式 */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) =>
      props.$themeMode === ThemeMode.Dark ? "#939393" : "##7D7D7D"};
  }
`;
