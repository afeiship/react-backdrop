// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';
import VisibleElement from '@jswork/visible-element';

const CLASS_NAME = 'react-backdrop';
// const uuid = () => Math.random().toString(36).substring(2, 9);
export type ReactBackdropProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * The z-index of backdrop.
   * @default 1000
   */
  zIndex?: number;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactBackdrop extends Component<ReactBackdropProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    const { className, ...rest } = this.props;
    return (
      <div data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest} />
    );
  }
}
