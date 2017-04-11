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

  componentWillReceiveProps(nextProps){
    const visible = nextProps.visible;
    if(typeof visible === 'boolean'){
      visible ? this.show() : this.hide();
    }
  }
}
