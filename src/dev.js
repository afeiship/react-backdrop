import Backdrop,{BackdropController} from './main';

class App extends React.Component{
  state={
    backVisible:false
  }
  componentWillMount(){
    this._backdrop = BackdropController.getInstance({
      onClick:function(){
        BackdropController.hide();
      }
    });
  }

  _click(name){
    BackdropController.show();
  }

  _click2(name){
    this.state.backVisible=true;
    console.log(this.state);
    this.setState(this.state);
  }

  render(){
    return (
      <div className="demo">
        <button onClick={this._click.bind(this,'btn')}>ClickMe</button>
        <button onClick={this._click2.bind(this,'btn2')}>Inlinke Backdrop</button>
        <Backdrop visible={this.state.backVisible} />
      </div>
    );
  }
}

ReactDOM.render(
    <App cssClass="test-bg" />,
    document.getElementById('app')
);
