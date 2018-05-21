import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { create, append } from 'react-append-to-document';
import 'next-return-event';

const CONTAINER_CLASS_NAME = 'react-backdrop-container';

export default class ReactBackdrop extends Component {
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

  constructor(inProps) {
    super(inProps);
    const { value, container } = inProps;
    this.state = {
      value,
      hidden: !value
    };
    this._callback = noop;
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      if (value) {
        this.setState({ hidden: false, value });
      } else {
        this.setState({ value });
      }
    }
  }

  componentWillUnmount(){
    this._callback = null;
  }

  then(inCallback) {
    this._callback = inCallback;
  }

  show() {
    this.setState({ hidden: false, value: true });
    return this;
  }

  hide() {
    this.setState({ value: false });
    return this;
  }

  visible(inValue) {
    return inValue ? this.show() : this.hide();
  }

  toggle() {
    const { value } = this.state;
    return this.visible(!value);
  }

  _onClick = e => {
    this.hide();
  };

  _onAnimationEnd = e => {
    const { value } = this.state;
    const event = nx.returnEventTarget(value);
    !value && this.setState({ hidden: true });
    this.props.onChange(event);
    this._callback(event);
  };

  render() {
    const { className, container, value, position, color, ...props } = this.props;
    const { hidden } = this.state;
    return (
      <div
        hidden={hidden}
        data-visible={this.state.value}
        data-color={color}
        data-position={position}
        onClick={this._onClick}
        onAnimationEnd={this._onAnimationEnd}
        className={classNames('webkit-sassui-backdrop react-backdrop', className)}
        {...props} />
    )
  }
}
