import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { create, append } from 'react-append-to-document';
import ReactVisible from 'react-visible';
import 'next-return-event';

const CONTAINER_CLASS_NAME = 'react-backdrop-container';

export default class ReactBackdrop extends ReactVisible {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    position: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    value: false,
    onChange: noop,
    position: 'fixed',
    color: 'black'
  };
  /*===properties end===*/

  static create(inProps) {
    const element = document.querySelector(`.${CONTAINER_CLASS_NAME}`) || create({ className: CONTAINER_CLASS_NAME });
    return append(ReactBackdrop, inProps, element);
  }

  _onClick = e => {
    this.hide();
  };

  render() {
    const { className, value, position, color, ...props } = this.props;
    const { hidden } = this.state;
    return (
      <div
        hidden={hidden}
        data-visible={this.state.value}
        data-color={color}
        data-position={position}
        onClick={this._onClick}
        onAnimationEnd={this.onAnimationEnd}
        className={classNames('webkit-sassui-backdrop react-backdrop', className)}
        {...props} />
    )
  }
}
