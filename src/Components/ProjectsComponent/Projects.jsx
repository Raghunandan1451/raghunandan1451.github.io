import React from 'react'
import styles from '@components/ProjectsComponent/projects.module.scss'

import projectData from '@json/projects.json'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'

const Projects = () => {
  return (
	<div className={`${styles.container}`}>
    {projectData.map((item, index) => (
      <GlassCard key={index} id={`project${index}`} additionalClass={styles.animate}>
        <a href={item.link}>
          <Header level={3} text={item.heading} />
        </a>
        <Paragraph additionalClass={styles.paraSpace} content={item.description} />
      </GlassCard>
    ))}
  </div>
  )
}

export default Projects
