import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";


let root: ReactDOM.Root;
function render() {
  console.log(window,"===")
  if (typeof window !== "undefined") {
    const container = qiankunWindow.__POWERED_BY_QIANKUN__
      ? document.getElementById("systemContainer")
      : document.getElementById("root");

    if (!container) {
      console.error("----未找到目标容器----");
    } else {
      root = createRoot(container);
      root.render(
          <App
            basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? "/mos-eib" : "/"}
          />
      );
    }
  } else {
    createRoot(document.getElementById("root")!).render(
        <App />
    );
  }
}

// 独立运行时直接渲染
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount() {
  console.log("props from main framework");
  render();
}

export async function unmount() {
  root.unmount();
  console.log("unmountunmountunmountunmountunmount");
}

export async function update() {
  throw new Error("Function not implemented.");
}


renderWithQiankun({
  bootstrap,
  mount,
  unmount,
  update,
});