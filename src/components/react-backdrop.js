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
      visible:props.visible
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      visible: nextProps.visible
    })
  }

  show(){
    this.state.visible = true;
    this.setState(this.state);
  }

  hide(){
    this.state.visible = false;
    this.setState(this.state);
  }

  render(){
    return (<div onClick={this.props.onClick}
      style={this.props.style}
      data-visible={this.state.visible}
      className={classNames('react-backdrop',this.props.cssClass)}></div>);
  }
}

export default Backdrop;
