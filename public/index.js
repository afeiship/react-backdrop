import ReactBackdrop from '../src/main';
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
