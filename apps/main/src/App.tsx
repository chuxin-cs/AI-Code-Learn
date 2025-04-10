import { useState } from 'react';
import { isString } from '@tocc/shared/utils';
import { USER_NAME } from '@tocc/constants';

function App() {
  const [count, setCount] = useState(0);
  console.log('@tocc/shared/utils===>', isString(123));
  console.log("@tocc/constants===>",USER_NAME)

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
