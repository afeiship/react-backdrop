import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import 'next-return-event';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    position: PropTypes.string,
    color: PropTypes.string,
    container: PropTypes.object,
  };

  static defaultProps = {
    value: false,
    onChange: noop,
    position: 'fixed',
    color: 'black',
    container: document.body
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { value, container } = inProps;
    this.state = {
      value,
      hidden: !value
    };
    this._callback = noop;
    this._container = container;
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
    return ReactDOM.createPortal(
      <div
        hidden={hidden}
        data-visible={this.state.value}
        data-color={color}
        data-position={position}
        onClick={this._onClick}
        onAnimationEnd={this._onAnimationEnd}
        className={classNames('webkit-sassui-backdrop react-backdrop', className)}
        {...props} />,
      this._container
    );
  }
}
