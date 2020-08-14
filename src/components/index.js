import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactVisible from '@feizheng/react-visible';
import noop from '@feizheng/noop';

const CLASS_NAME = 'react-backdrop';
const positions = ['absolute', 'fixed'];

export default class ReactBackdrop extends ReactVisible {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Abstract visible value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * If element destroyed when visible to false.
     */
    destroyable: PropTypes.bool,
    /**
     * If style.position is fixed.
     */
    fixed: PropTypes.bool
  };

  static defaultProps = {
    onChange: noop,
    destroyable: false,
    fixed: false
  };

  get visibleElementView() {
    const {
      className,
      fixed,
      value,
      onChange,
      style,
      destroyable,
      ...props
    } = this.props;
    const { hidden } = this.state;
    const position = positions[Number(fixed)];
    const _style = { position, ...style };

    return (
      <div
        data-component={CLASS_NAME}
        data-visible={this.state.value}
        hidden={hidden}
        className={classNames('webkit-sassui-backdrop', CLASS_NAME, className)}
        style={_style}
        onAnimationEnd={this.handleAnimationEnd}
        {...props}
      />
    );
  }
}
