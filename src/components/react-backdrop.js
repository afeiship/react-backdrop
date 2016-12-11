import './style.scss';

export default class extends React.Component{
  static propTypes:{
    visible:React.PropTypes.bool,
    cssClass:React.PropTypes.string,
    onClick:React.PropTypes.func
  }
  render(){
    return <div onClick={this.props.onClick} data-visible={this.props.visible} className={`react-backdrop ${this.props.cssClass}`}></div>;
  }
}
