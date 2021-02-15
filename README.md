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
| Name        | Type | Required | Default | Description                 |
| ----------- | ---- | -------- | ------- | --------------------------- |
| fixed       | bool | false    | true    | If style.position is fixed. |
| transparent | bool | false    | false   | If the opacity is 0.        |


## usage
1. import css
  ```scss
  @import "~@jswork/react-backdrop/dist/style.scss";
  @import "~@jswork/wsui-backdrop";

  // customize your styles:
  $react-backdrop-options: ()
  ```
2. import js
  ```js
  import ReactBackdrop from '@jswork/react-backdrop';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      visible: false
    };

    handleClick = (e) => {
      this.setState({ visible: !this.state.visible });
    };

    render() {
      const { visible } = this.state;
      return (
        <div className="app-container">
          <button className="button" onClick={this.handleClick}>
            Toggle
          </button>
          <ReactBackdrop destroyable value={visible} />
        </div>
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
