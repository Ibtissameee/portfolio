"use client"
import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className='heading'>
            My Projects
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map((project) => (
                <div key={project.id} className='sm:h-[41rem] lg:min-h-[32rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={project.title} href={project.link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[43vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl '>
                                <img src="/assets/bg.png"/>
                            </div>
                            <img 
                            src={project.img}
                            alt={project.title}
                            className="z-10 absolute bottom-0"
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {project.title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {project.description}
                        </p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {project.iconLists.map((icon) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'>
                                        <img src={icon} alt={icon} className='p-2'/>

                                    </div>

                                ))}

                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    Github 
                                </p>
                                <FaLocationArrow className='ms-3' color="#CBACF9"/>
                            </div>

                        </div>
                    </PinContainer>
                </div>    
            ))}

        </div>
      
    </div>
  )
}

export default Projects
