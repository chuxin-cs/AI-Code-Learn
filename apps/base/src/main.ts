import { createApp } from 'vue'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper";

let app = null;
function render() {
  if (typeof window !== "undefined") {
    const container = qiankunWindow.__POWERED_BY_QIANKUN__
    ? document.getElementById("baseContainer")
    : document.getElementById("app");
    console.log(container,":container====<")
    if (!container) {
      console.error("----未找到目标容器----");
    } else {
      app = createApp(App)
      app.mount("#app");
    }
  }else {
    app = createApp(App)
    app.mount("#app")
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
  alert(1)
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