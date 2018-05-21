import './dev.scss';
import ReactBackdrop from './main';

/*===example start===*/

// install: npm install afeiship/react-backdrop --save
// import : import ReactBackdrop from 'react-backdrop'

class App extends React.Component{
  state = {
    value: false
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.rc = React.createRef();
  }

  _show = e =>{
    this.setState({ value: true });
  };

  _hide = e =>{
    this.setState({ value: false });
  };

  _onChange = e =>{
    console.log('on change, value is:', e.target.value);
  };

  _onClick = e =>{
    console.log(this,'click!');
  };

  render(){
    const container = document.getElementById('app');
    return (
      <div className="hello-react-backdrop" id="test-container">
        <ReactBackdrop
        onChange={this._onChange}
        value={this.state.value}
        container={container}
        ref={this.rc} />
        <button onClick={this._show}>Show</button>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
