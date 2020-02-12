# react-backdrop
> Backdrop for react.

## installation
```shell
npm install -S @feizheng/react-backdrop
```

## update
```shell
npm update @feizheng/react-backdrop
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| value     | bool   | false   | Default value.                        |
| onChange  | func   | noop    | The change handler.                   |
| fixed     | bool   | false   | If style.position is fixed.           |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-backdrop/dist/style.scss";
  @import "~@feizheng/webkit-sassui-backdrop";

  // customize your styles:
  $react-backdrop-options: ()
  ```
2. import js
  ```js
  import ReactBackdrop from '@feizheng/react-backdrop';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      visible: false
    };

    click1 = (e) => {
      this.setState({ visible: !this.state.visible });
    };

    render() {
      const { visible } = this.state;
      return (
        <div className="app-container">
          <button className="button" onClick={this.click1}>
            Toggle
          </button>
          <ReactBackdrop value={visible} />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-backdrop/
