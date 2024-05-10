// import noop from '@jswork/noop';
import cx from 'classnames';
import { createRef, Component, HTMLAttributes } from 'react';
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
   * The backdrop blur value.
   * @default 0
   */
  blur?: number;
  /**
   * The backdrop opacity value.
   * @default 0.1
   */
  opacity?: number;
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
    blur: 0,
    opacity: 0.1,
  };

  private elementRef = createRef<HTMLDivElement>();
  private ve?: VisibleElement;

  get style() {
    const { blur, opacity, style } = this.props;
    return {
      '--react-backdrop-blur': `${blur}px`,
      '--react-backdrop-opacity': `${opacity}`,
      ...style,
    };
  }

  componentDidMount() {
    const { visible } = this.props;
    this.ve = new VisibleElement(this.elementRef.current!);
    this.ve.to(visible!);
  }

  shouldComponentUpdate(nextProps: ReactBackdropProps) {
    const { visible } = nextProps;
    if (visible !== this.props.visible) this.ve?.to(visible!);
    return true;
  }

  render() {
    const { className, visible, zIndex, fixed, style, blur, opacity, ...rest } = this.props;
    return (
      <div
        ref={this.elementRef}
        hidden
        data-fixed={fixed}
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        style={{ zIndex, ...this.style }}
        {...rest}
      />
    );
  }
}
