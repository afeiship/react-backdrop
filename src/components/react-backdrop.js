import './style.scss';
import React,{createElement,PureComponent,PropTypes} from 'react';
import appendToDocument from 'react-append-to-document';
import ReactVisible from 'react-visible';
import classNames from 'classnames';
import noop from 'noop';


export default class ReactBackdrop extends ReactVisible{
  static propTypes = {
    className:PropTypes.string,
  };

  static defaultProps = {
    className:'react-backdrop'
  };

  static newInstance(inProps){
    const {className,...props} = inProps;
    const cls = classNames('react-backdrop',className);
    const options = Object.assign({},inProps,{className:cls});
    return appendToDocument(ReactVisible,options,{
      className:'react-backdrop-container'
    });
  };
}
