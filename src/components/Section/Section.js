import React from 'react'
import classNames from 'classnames'

import SectionStyles from './Section.module.css'

const Section = ({
  sectionTitle,
  subTitle,
  description,
  background,
  children
}) => {
  const sectionClasses = classNames({
    [`${SectionStyles.container}`]: true,
    [`${SectionStyles.background}`]: background
  })
  return (
    <section className={sectionClasses}>
      <div className={SectionStyles.text}>
        {sectionTitle && <h2>{sectionTitle}</h2>}
        {subTitle && <h2>{subTitle}</h2>}
        {description && <p>{description}</p>}
      </div>
      <div className={SectionStyles.child}>{children}</div>
    </section>
  )
}

export default Section
