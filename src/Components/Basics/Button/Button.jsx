import React from 'react'
import styles from '@components/Basics/Button/button.module.scss'
// import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
// import { useMediaQuery } from 'react-responsive'

const Button = ({name, iconClass, onClick, addClass}) => {
  
  return (
    <button className={`${styles.btn} ${styles.btn__responsive} ${addClass}`} onClick={onClick}>
      {iconClass && <FontAwesomeIcon icon={iconClass} className={`${styles.icon}`} />}
      {name && <span className={`${styles.text}`}>{name}</span>}
    </button>
  )
}

Button.propTypes = {
  iconClass: PropTypes.object.isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.func,    // Function
    PropTypes.string,  // String (URL)
  ]),
  name: PropTypes.string.isRequired,
  addClass: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.object,
    PropTypes.array
  ]),
};

export default Button