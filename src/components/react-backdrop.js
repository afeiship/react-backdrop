import './style.scss';

import PropTypes from 'prop-types';
import ReactVisible from 'react-visible';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';

function getProps(inProps){
    const {className,...props} = inProps;
    const cls = classNames('react-backdrop',className);
    return {className:cls,...props};
}


export default class ReactBackdrop extends ReactVisible{
  static newInstance(inProps){
    return appendToDocument(ReactVisible, getProps(inProps),{
      className:'react-backdrop-container'
    });
  };

  render(){
    const props = getProps(this.props);
    return (
      <ReactVisible {...props}  />
    );
  }
}
