import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import phoneIcon from '../../assets/icons/fa/phone.svg';
import Icon from '../Icon';
import './style.scss';

class PhoneCard extends PureComponent {
  render() {
    const { className, withBorder, ...props } = this.props;

    return (
      <div
        className={classnames(
          'Van-PhoneCard',
          {
            'Van-PhoneCard--withBorder': withBorder
          },
          className
        )}
        {...props}
      >
        <span className="Van-PhoneCard-number">
          <Icon source={phoneIcon} />
          {this.props.number}
        </span>
        <span className="Van-PhoneCard-description">{this.props.description}</span>
      </div>
    );
  }
}

PhoneCard.defaultProps = {
  withBorder: false,
  className: '',
  number: '',
  description: ''
};

PhoneCard.propTypes = {
  withBorder: PropTypes.bool,
  className: PropTypes.string,
  number: PropTypes.node,
  description: PropTypes.node
};

export default PhoneCard;
