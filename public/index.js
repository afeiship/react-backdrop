import ReactBackdrop from '../src/main';
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
