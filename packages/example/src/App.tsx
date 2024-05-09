import Backdrop from '../../lib/src';
import './index.css';
import '../../lib/src/style.scss';
import React from 'react';

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <h1>react-backdrop</h1>
      <Backdrop visible={visible} />
      <nav className="x-2 p-1 shadow *:btn-wide fixed m-4 right-0 top-0 bg-white z-[10000]">
        <button className="btn btn-info " onClick={() => setVisible(true)}>
          Open
        </button>
        <button className="btn btn-primary" onClick={() => setVisible(false)}>
          Close
        </button>
      </nav>
    </div>
  );
}

export default App;
