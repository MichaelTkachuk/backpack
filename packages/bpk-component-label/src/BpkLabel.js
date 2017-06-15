import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './bpk-label.scss';

const getClassName = cssModules(STYLES);

const BpkLabel = (props) => {
  const { children, required, white, disabled, className, ...rest } = props;
  const classNames = [getClassName('bpk-label')];

  if (white) { classNames.push(getClassName('bpk-label--white')); }
  if (disabled) { classNames.push(getClassName('bpk-label--disabled')); }
  if (className) { classNames.push(className); }

  return (
    // The BpkFieldset component addresses the issue of enforcing `htmlFor`
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label className={classNames.join(' ')} {...rest}>
      {children}
      {required && (
        <span className={getClassName('bpk-label__asterix')}>*</span>
      )}
    </label>
  );
};

BpkLabel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  white: PropTypes.bool,
};

BpkLabel.defaultProps = {
  className: null,
  disabled: false,
  required: false,
  white: false,
};

export default BpkLabel;
