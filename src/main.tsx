import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

// tailwind css
import "./theme/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")! as HTMLElement
);

// 创建一个 client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 失败重复次数
      gcTime: 300_000, // 缓存有效期 5m
      staleTime: 10_1000, // 缓存过期时间 10s

      refetchOnWindowFocus: false, // 禁止窗口聚焦时重新获取数据
      refetchOnReconnect: false, // 禁止重新连接时重新获取数据
      refetchOnMount: false, // 禁止组件挂载时重新获取数据
    },
  },
});

root.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      {/* devtool */}
      <ReactQueryDevtools />
      {/* app容器 */}
      <Suspense>
        <App />
      </Suspense>
    </QueryClientProvider>
  </HelmetProvider>
);
