// react
import { Suspense } from "react";
import { createRoot } from 'react-dom/client';
// helmet
import { HelmetProvider } from 'react-helmet-async';
// root component
import App from './App.tsx';

// qiankun 相关配置 后期会迁移到 packages 目录中
import { registerMicroApps, start } from 'qiankun';

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
  },
]);

let root = null;
function init() {
  root = createRoot(document.getElementById('root')!);
  root.render(
    <HelmetProvider>
      <Suspense>
        <App />
      </Suspense>
    </HelmetProvider>
  );
  start();
}
init();
