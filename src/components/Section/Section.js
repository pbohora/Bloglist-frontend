import React from 'react'
import SectionStyles from './Section.module.css'

const Section = ({ sectionTitle, children }) => {
  return (
    <section className={SectionStyles.container}>
      <h2>{sectionTitle}</h2>

      <div className={SectionStyles.child}>{children}</div>
    </section>
  )
}

export default Section
