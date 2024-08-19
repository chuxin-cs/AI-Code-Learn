import { forwardRef } from "react";
import { Content } from "antd/es/layout/layout";

interface Props {
  offsetTop?: number;
}

const Main = forwardRef<HTMLDivElement, Props>(({ offsetTop = false }, ref) => {
  return <Content ref={ref}>111</Content>;
});

export default Main;
