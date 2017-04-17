import {ReactBackdropCtrl,ReactBackdrop} from './main';
import './dev.scss';

class App extends React.Component{

  state={
    bkVisible:false
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
    console.log(this.state.bkVisible);
    this.setState({
      bkVisible:!this.state.bkVisible
    });
  }

  render(){
    return (
      <div className="hello-backdrop">

        <button onClick={this._click.bind(this,'btn')}>Show ctrl backdrop</button>
        <button onClick={this._click1.bind(this,'btn2')}>Toggle inline backdrop</button>

        <div className="rel">
          <ReactBackdrop onClick={()=>{
            this.refs.bk.hide();
          }} ref='bk' visible={this.state.bkVisible} className="react-backdrop" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <App cssClass="test-bg" />,
    document.getElementById('app')
);
