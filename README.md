# react-backdrop
> Drawer for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-backdrop
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-backdrop/dist/style.css";

  // or use sass
  @import "~@jswork/react-backdrop/dist/style.scss";
  ```
2. import js
  ```js
  import { useState } from 'react';
  import Backdrop from '@jswork/react-backdrop';
  import './index.css';
  import '@jswork/react-backdrop/dist/style.scss';

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

  ```

## preview
- https://afeiship.github.io/react-backdrop/

## license
Code released under [the MIT license](https://github.com/afeiship/react-backdrop/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-backdrop
[version-url]: https://npmjs.org/package/@jswork/react-backdrop

[license-image]: https://img.shields.io/npm/l/@jswork/react-backdrop
[license-url]: https://github.com/afeiship/react-backdrop/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-backdrop
[size-url]: https://github.com/afeiship/react-backdrop/blob/master/dist/react-backdrop.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-backdrop
[download-url]: https://www.npmjs.com/package/@jswork/react-backdrop
