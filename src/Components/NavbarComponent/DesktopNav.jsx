import React from 'react'
import { Link } from 'react-router-dom'
import { faAddressCard, faCode, faGears, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import Button from '@components/Basics/Button/Button'

const DesktopNav = () => {
  return (
	<>
		<div className={`${styles.left}`}> 
			<Link to={`/`} className={`${styles.container}`}>
				<Button name={'Home'} iconClass={faHome} />
			</Link>
		</div>
		<div className={`${styles.right}`}>
			<Link to={`/about`} className={`${styles.container}`}>
				<Button name={'About'} iconClass={faUser} />
			</Link>
			<Link to={`/contact`} className={`${styles.container}`}>
				<Button name={'Contact'} iconClass={faAddressCard} />
			</Link>
			<Link to={`/skills`} className={`${styles.container}`}>
				<Button name={'Skills'} iconClass={faGears} />
			</Link>
			<Link to={`/projects`} className={`${styles.container}`}>
				<Button name={'Projects'} iconClass={faCode} />
			</Link>
		</div>
	</>
  )
}

export default DesktopNav