import './style.scss';

import PropTypes from 'prop-types';
import ReactVisible from 'react-visible';
import appendToDocument from 'react-append-to-document';
import classNames from 'classnames';

export default class ReactBackdrop extends ReactVisible{
  static newInstance(inProps){
    const {className,...props} = inProps;
    const cls = classNames('react-backdrop',className);
    const options = {className:cls,...props};
    return appendToDocument(ReactVisible,options,{
      className:'react-backdrop-container'
    });
  };

  render(){
    const { hidden } = this.state;
    const {className,...props} = this.props;
    const cls = classNames('react-backdrop',className);
    return (
      <ReactVisible hidden={hidden} className={cls} {...props}  />
    );
  }
}
