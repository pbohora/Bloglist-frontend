import React from 'react'

import SubSectionStyles from './subsection.module.css'

import blogImage from '../../Assests/addblog.png'

const SubSection = () => {
  return (
    <div className={SubSectionStyles.root}>
      <div className={SubSectionStyles.item}>
        <h1>Know your audience</h1>
        <p>
          Find out which posts are a hit with Blogger’s built-in analytics.
          You’ll see where your audience is coming from and what they’re
          interested in. You can even connect your blog directly to Google
          Analytics for a more detailed look.
        </p>
      </div>

      <img src={blogImage} alt='img' height='250' width='300' />
    </div>
  )
}

export default SubSection
