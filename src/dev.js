import {BackdropController} from './main';

class App extends React.Component{
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

  render(){
    return (
      <div className="demo">
        <button onClick={this._click.bind(this,'btn')}>ClickMe</button>
      </div>
    );
  }
}

ReactDOM.render(
    <App cssClass="test-bg" />,
    document.getElementById('app')
);
