import './style.scss';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';

class Backdrop extends React.Component{
  static propTypes = {
    visible:React.PropTypes.bool,
    style:React.PropTypes.object,
    cssClass:React.PropTypes.string
  }

  static defaultProps = {
    visible:false,
    cssClass:'',
    style:{}
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

  componentWillReceiveProps(nextProps){
    this.setState({
      visible: nextProps.visible
    })
  }

  show(){
    var self=this;
    this.setState({
      animating:true
    });

    setTimeout(function(){
      self.setState({
        visible:true
      });
    })
  }

  hide(){
    var self=this;
    this.setState({
      animating:true
    });

    setTimeout(function(){
      self.setState({
        visible:false
      });
    })
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
      onClick={this.props.onClick}
      style={this.props.style}
      hidden={!this.state.visible && !this.state.animating}
      data-visible={this.state.visible}
      onTransitionEnd={this._onTransitionEnd.bind(this)}
      className={classNames('react-backdrop',this.props.cssClass)}></div>);
  }
}

export default Backdrop;
