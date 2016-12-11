import ReactBackdrop from './main';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      visible:props.visible
    }
  }
  _click(name){
    this.setState({
      visible:name =='btn'
    })
  }
  render(){
    return (
      <div className="demo">
        <ReactBackdrop onClick={this._click.bind(this,'drop')} visible={this.state.visible} />
        <button onClick={this._click.bind(this,'btn')}>ClickMe</button>
      </div>
    );
  }
}

ReactDOM.render(
    <App cssClass="test-bg" visible={false} />,
    document.getElementById('app')
);
