import './style.scss';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';
import noop from 'noop';

class Backdrop extends React.Component{
  static propTypes = {
    visible:React.PropTypes.bool,
    style:React.PropTypes.object,
    cssClass:React.PropTypes.string,
    onHidden:React.PropTypes.func,
    onShown:React.PropTypes.func,
    onClick:React.PropTypes.func,
  }

  static defaultProps = {
    visible:false,
    cssClass:'',
    style:{},
    onHidden:noop,
    onShown:noop,
    onClick:noop
  }

  static newInstance(inProps){
    return appendToDocument(Backdrop,inProps,{
      className:'backdrop-wrapper'
    });
  }

  constructor(props){
    super(props);
    this.state = {
      visible:props.visible,
      animating:false
    };
  }

  componentWillReceiveProps(nextProps,nextState){
    this.setState(nextProps)
  }

  show(){
    if(!this.state.visible){
      this._setVisible(true,this.props.onShown);
    }
  }

  hide(){
    if(this.state.visible){
      this._setVisible(false,this.props.onHidden);
    }
  }

  _setVisible(inValue,inCallback){
    var self=this;
    this.setState({
      animating:true
    });

    setTimeout(function(){
      self.setState({
        visible:inValue
      },()=>{
        inCallback(self.state);
      });
    });
  }

  _onTransitionEnd(){
    this.setState({
      animating:false
    });
  }

  //hidden: 没有动画，visible= false;
  //无hidden: visible:true

  render(){
    return (<div
      style={this.props.style}
      hidden={!this.state.visible && !this.state.animating}
      data-visible={this.state.visible}
      onClick={this.props.onClick}
      onTransitionEnd={this._onTransitionEnd.bind(this)}
      className={classNames('react-backdrop',this.props.cssClass)}></div>);
  }
}

export default Backdrop;
