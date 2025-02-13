import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';
import Signup from './signup';  // ✅ Capitalized Component Name
import Home from './home';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     {/* //ignup />  ✅ Capitalized Component Usage */}
      <Home/>
    </>
  );
}

export default App;
