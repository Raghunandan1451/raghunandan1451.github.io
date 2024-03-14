import React from 'react'
import { Link } from 'react-router-dom'

import styles from '@components/HomeComponent/home.module.scss'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

const LinkGroup = () => {
  return (
	<>
		<Link to={'#'} className={`${styles.animate} ${styles.animate_1}`}>
			<ButtonReshaped id={'btn1'} name={'Get Started'} additionalClass={styles.btnStyle1} />
		</Link>
		<Link to={'#'} className={`${styles.animate} ${styles.animate_2}`}>
			<ButtonReshaped id={'btn2'} name={'Learn More'} additionalClass={styles.btnStyle2} />
		</Link>
		<Link to={'#'} className={`${styles.animate} ${styles.animate_3}`}>
			<ButtonReshaped id={'btn3'} name={'Contact Us'} additionalClass={styles.btnStyle3} />
		</Link>
		<Link to={'#'} className={`${styles.animate} ${styles.animate_4}`}>
			<ButtonReshaped id={'btn4'} name={'Download CV'} additionalClass={styles.btnStyle4} />
		</Link>
	</>
  )
}

export default LinkGroup