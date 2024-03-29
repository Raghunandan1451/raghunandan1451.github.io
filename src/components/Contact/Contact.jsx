import {useEffect, useState } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import {SiGmail, SiWhatsapp, SiDiscord} from 'react-icons/si'
import {FaLinkedin, FaInstagram} from 'react-icons/fa'

import contact from './contact.module.css'

function Contact() {
	const [widthDimension, setWidthDimension] = useState(null)
	
	useEffect(() => {
	  setWidthDimension(window.innerWidth)
	}, [])

	useEffect(() => {
		const handleResize = () => {
			setWidthDimension(window.innerWidth);
		}
	
		window.addEventListener("resize", handleResize);
		
		return () => window.removeEventListener("resize", handleResize);
	}, [])

	
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
		AOS.refresh();
	}, [])

	return (
		<div className={contact.background}>
			{widthDimension >= 700 ?
				<div className={contact.icon_container}>
				<div 
					className={contact.text}
					data-aos='slide-down'
				>
					You can contact me through these medium.
				</div>
				<a 
					href="mailto:raghunandansharma615@gmail.com" 
					rel="noreferrer"
					data-aos='slide-right'
				>
					<div className={contact.gmail}>
						<SiGmail className={contact.gmailIcon} />
						raghunandansharma615@gmail.com
					</div>
				</a>
				<div
					className={contact.whatsapp}
					data-aos='slide-left'
				>
					<SiWhatsapp className={contact.whatsappIcon} />
					+91 9814101383
				</div>
				<a 
					target='_blank' 
					href='https://www.linkedin.com/in/raghunandan-sharma/' 
					rel="noreferrer"
					data-aos='slide-right'
				>		
					<div className={contact.linkedIn}>
						<FaLinkedin className={contact.linkedInIcon} />
						raghunandan sharma
					</div>
				</a>
				<div 
					className={contact.discord}
					data-aos='slide-left'
				>
					<SiDiscord className={contact.discordIcon} />
					Senshi Ryo#6474
				</div>
				<a 
					href="https://www.instagram.com/rick_lykos/" 
					target="_blank"
					rel="noreferrer"
					data-aos='slide-right'
				>
					<div className={contact.instagram}>
						<FaInstagram className={contact.instagramIcon} />
						rick_lykos
					</div>
				</a>
				</div> : <div className={contact.icon_container}>
				<div 
					className={contact.text}
					data-aos='slide-down'
				>
					You can contact me through these medium.
				</div>
				<a 
					href="mailto:raghunandansharma615@gmail.com" 
					rel="noreferrer"
					data-aos='slide-right'
				>
					<div className={contact.gmail}>
						raghunandansharma615@gmail.com
					</div>
				</a>
				<div
					className={contact.whatsapp}
					data-aos='slide-left'
				>
					+91 9814101383
				</div>
				<a 
					target='_blank' 
					href='https://www.linkedin.com/in/raghunandan-sharma/' 
					rel="noreferrer"
					data-aos='slide-right'
				>		
					<div className={contact.linkedIn}>
						raghunandan sharma
					</div>
				</a>
				<div 
					className={contact.discord}
					data-aos='slide-left'
				>
					Senshi Ryo#6474
				</div>
				<a 
					href="https://www.instagram.com/rick_lykos/" 
					target="_blank"
					rel="noreferrer"
					data-aos='slide-right'
				>
					<div className={contact.instagram}>
						rick_lykos
					</div>
				</a>
			</div>}
		</div>
	)
}

export default Contact
