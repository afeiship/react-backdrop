import './style.scss';
import React,{PureComponent,PropTypes} from 'react';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';
import noop from 'noop';

export default class ReactBackdrop extends PureComponent{
  static propTypes = {
    visible:PropTypes.bool,
    style:PropTypes.object,
    className:PropTypes.string,
    onClick:PropTypes.func,
  }

  static defaultProps = {
    visible:false,
    className:'',
    style:{},
    onClick:noop
  }

  static newInstance(inProps){
    return appendToDocument(ReactBackdrop,inProps,{
      className:'react-backdrop-container'
    });
  }

  constructor(props){
    super(props);
    this.state = {
      visible:props.visible,
      animating:false,
      hidden:!props.visible
    };
  }

  show(inCallback){
    this.setState({ hidden:false, animating:true, visible:false },()=>{
      setTimeout(()=>{
        this.setState({visible:true},inCallback || noop);
      });
    });
  }

  hide(inCallback){
    this.setState({ animating:true },()=>{
      setTimeout(()=>{
        this.setState({visible:false}, inCallback || noop );
      });
    });
  }

  _onTransitionEnd = () => {
    const {visible}  = this.state;
    this.setState({
      animating:false
    },()=>{
      if(visible == false){
        this.setState({hidden:true});
      }
    });
  };

  render(){
    return (<div
      hidden={this.state.hidden}
      data-animating={this.state.animating}
      data-visible={this.state.visible}
      style={this.props.style}
      onClick={this.props.onClick}
      className={classNames('react-backdrop',this.props.className)}
      onTransitionEnd={this._onTransitionEnd}></div>);
  }
}
