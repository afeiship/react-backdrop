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
    ...ReactVisible.propTypes,
    /**
     * If style.position is fixed.
     */
    fixed: PropTypes.bool,
    /**
     * If the opacity is 0.
     */
    transparent: PropTypes.bool
  };

  static defaultProps = {
    ...ReactVisible.defaultProps,
    fixed: true,
    transparent: false
  };

  get visibleElementView() {
    const {
      className,
      fixed,
      value,
      onChange,
      style,
      destroyable,
      transparent,
      onPresent,
      onDismiss,
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
        className={classNames(
          'webkit-sassui-backdrop',
          { 'is-transparent': transparent },
          CLASS_NAME,
          className
        )}
        style={_style}
        onAnimationEnd={this.handleAnimationEnd}
        {...props}
      />
    );
  }
}
