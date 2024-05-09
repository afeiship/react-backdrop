import Button from '@jswork/react-backdrop/src';
import './index.css';
import '@jswork/react-backdrop/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <h1>react-backdrop</h1>
      <Button onClick={() => console.log('click me!')}>
        Click me
      </Button>
    </div>
  );
}

export default App;
