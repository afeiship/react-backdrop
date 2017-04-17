import './style.scss';
import {PropTypes} from 'react';
import appendToDocument from 'react-append-to-document';
import ReactVisible from 'react-visible';
import classNames from 'classnames';

export default class ReactBackdrop extends ReactVisible{
  static newInstance(inProps){
    const {className,...props} = inProps;
    const cls = classNames('react-backdrop',className);
    const options = Object.assign({},inProps,{className:cls});
    return appendToDocument(ReactVisible,options,{
      className:'react-backdrop-container'
    });
  };

  render(){
    const {className,...props} = this.props;
    const cls = classNames('react-backdrop',className);
    return (
      <ReactVisible className={cls} {...props}  />
    );
  }
}
