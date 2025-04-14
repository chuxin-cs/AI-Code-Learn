import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// qiankun 相关配置 后期会迁移到 packages 目录中
import {registerMicroApps, start} from "qiankun";

registerMicroApps([
  {
    name: 'system',
    entry: '//localhost:9001',
    container: '#systemContainer',
    activeRule: '/system',
  },
  {
    name: 'base',
    entry: '//localhost:9002',
    container: '#baseContainer',
    activeRule: '/base',
  }
])


let root = null;
function init() {
  root = createRoot(document.getElementById('root')!);
  root.render(<App />);
  start();
  console.log("main 服务init...")
}
init();