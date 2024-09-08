import React from 'react'
import { ContentAbout } from './ui/ContentAbout'
import { ContentExperience } from './ui/ContentExperience'
import { ContentProjects } from './ui/ContentProjects'
import { ContentSkills } from './ui/ContentSkills'
import { Footer } from './ui/Footer'

export const Content = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-20'>
        <ContentAbout />
        <ContentExperience />
        <ContentProjects />
        <ContentSkills />
        <Footer />
    </div>
    
  )
}
