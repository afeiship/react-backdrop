import {ReactBackdropCtrl} from './main';
import './dev.scss';

class App extends React.Component{

  state={
    backVisible:false
  }

  componentWillMount(){
    this._backdrop = ReactBackdropCtrl.createInstance({
      onClick:function(){
        ReactBackdropCtrl.hide(()=>{
          console.log('on hidden..')
        });
      }
    });
  }

  _click(name){
    ReactBackdropCtrl.show(function(){
      console.log('has show...')
    });
  }

  render(){
    return (
      <div className="hello-backdrop">
        <button onClick={this._click.bind(this,'btn')}>ClickMe</button>
      </div>
    );
  }
}

ReactDOM.render(
    <App cssClass="test-bg" />,
    document.getElementById('app')
);
