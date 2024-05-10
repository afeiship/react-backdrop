import { useState } from 'react';
import Backdrop from '@jswork/react-backdrop/src';
import './index.css';
import '@jswork/react-backdrop/src/style.scss';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="m-10 relative p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <h1>react-backdrop</h1>
      <Backdrop visible={visible} fixed blur={2} opacity={0.2} onClick={() => setVisible(false)} />
      <nav className="x-2 p-1 shadow absolute m-4 right-0 top-0 bg-white z-[10000]">
        <button className="btn btn-sm btn-info " onClick={() => setVisible(true)}>
          Open
        </button>
        <button className="btn btn-sm btn-primary" onClick={() => setVisible(false)}>
          Close
        </button>
      </nav>
    </div>
  );
}

export default App;
