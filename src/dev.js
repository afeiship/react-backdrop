import {ReactBackdropCtrl,ReactBackdrop} from './main';
import './dev.scss';

class App extends React.Component{

  state={
    backVisible:false
  }

  componentWillMount(){
    this._backdrop = ReactBackdropCtrl.createInstance({
      'data-aaa':'aaa',
      onTouchStart:function(){
        console.log('touchstart...');
      },
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

  _click1(){
    this.refs.bk.show();
  }

  render(){
    return (
      <div className="hello-backdrop">

        <button onClick={this._click.bind(this,'btn')}>ClickMe</button>
        <button onClick={this._click1.bind(this,'btn2')}>ClickMe</button>

        <div className="rel">
          <ReactBackdrop ref='bk' className="react-backdrop" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <App cssClass="test-bg" />,
    document.getElementById('app')
);
