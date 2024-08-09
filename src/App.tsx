import { App as AntdApp } from "antd";
import Router from "@/router";
import { Helmet } from "react-helmet-async";
import Logo from "@/assets/images/logo.png";

export default function App() {
  return (
    <AntdApp>
      <Helmet>
        <title>首页</title>
        <link rel="icon" href={Logo} />
      </Helmet>

      <Router />
    </AntdApp>
  );
}
