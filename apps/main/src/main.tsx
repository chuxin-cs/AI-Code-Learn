import { createRoot } from 'react-dom/client';
import App from './App.tsx';

let root = null;
function bootstrap() {
  root = createRoot(document.getElementById('root')!);
  root.render(<App />);
}
bootstrap();