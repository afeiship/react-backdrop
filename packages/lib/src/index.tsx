// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { createRef, Component, HTMLAttributes } from 'react';
import VisibleElement from '@jswork/visible-element';

const CLASS_NAME = 'react-backdrop';
export type ReactBackdropProps = {
  /**
   * The extended className for component.
   * @default ''
   */
  className?: string;
  /**
   * Whether to show backdrop or not.
   * @default false
   */
  visible?: boolean;
  /**
   * Whether to fixed backdrop or not.
   * @default false
   */
  fixed?: boolean;
  /**
   * The z-index of backdrop.
   * @default 1000
   */
  zIndex?: number;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactBackdrop extends Component<ReactBackdropProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    fixed: false,
    visible: false,
    zIndex: 1000,
  };

  private elementRef = createRef<HTMLDivElement>();
  private ve: VisibleElement;

  componentDidMount() {
    this.ve = new VisibleElement(this.elementRef.current!);
  }

  shouldComponentUpdate(nextProps: ReactBackdropProps) {
    const { visible } = nextProps;
    if (visible !== this.props.visible) this.ve?.to(visible!);
    return true;
  }

  render() {
    const { className, visible, zIndex, fixed, ...rest } = this.props;
    return (
      <div
        ref={this.elementRef}
        hidden
        data-fixed={fixed}
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        {...rest}
      />
    );
  }
}
