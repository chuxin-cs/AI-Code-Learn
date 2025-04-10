import { useState } from 'react';
import { isString } from '@tocc/shared/utils';

function App() {
  const [count, setCount] = useState(0);
  console.log('===>', isString(123));

  return (
    <>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
