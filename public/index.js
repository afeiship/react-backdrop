import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactBackdrop from '../src/main';
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
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-backdrop">
        <button className="button" onClick={this.handleClick}>
          Toggle
        </button>
        <ReactBackdrop destroyable value={visible} />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
