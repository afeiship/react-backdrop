import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-backdrop';

export default class ReactBackdrop extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * If style.position is fixed.
     */
    fixed: PropTypes.bool
  };

  static defaultProps = {
    value: false,
    onChange: noop,
    fixed: false
  };

  constructor(inProps) {
    super(inProps);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.state = {
      hidden: !inProps.value
    };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.props.value && value) {
      this.setState({ hidden: false });
    }
    return true;
  }

  handleAnimationEnd() {
    const { value } = this.props;
    !value && this.setState({ hidden: true });
  }

  render() {
    const { className, fixed, value, onChange, style, ...props } = this.props;
    const { hidden } = this.state;
    const _style = objectAssign(
      { position: fixed ? 'fixed' : 'absolute' },
      style
    );

    return (
      <div
        data-component={CLASS_NAME}
        data-visible={value}
        hidden={hidden}
        className={classNames('webkit-sassui-backdrop', CLASS_NAME, className)}
        style={_style}
        onAnimationEnd={this.handleAnimationEnd}
        {...props}
      />
    );
  }
}
