import './style.scss';

import {PropTypes} from 'react';
import ReactVisible from 'react-visible';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class ReactBackdrop extends ReactVisible{
  static newInstance(inProps){
    const {className,...props} = inProps;
    const cls = classNames('react-backdrop',className);
    const options = objectAssign(...inProps,{className:cls});
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
