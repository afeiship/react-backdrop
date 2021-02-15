# react-backdrop
> Backdrop for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-backdrop
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-backdrop/dist/style.css";

  // or use sass
  @import "~@jswork/react-backdrop/dist/style.scss";

  // customize your styles:
  $react-backdrop-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactBackdrop from '@jswork/react-backdrop';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-backdrop">
          <ReactBackdrop className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
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
