import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';
import Signup from './signup';  // ✅ Capitalized Component Name

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Signup />  {/* ✅ Capitalized Component Usage */}
    </>
  );
}

export default App;
