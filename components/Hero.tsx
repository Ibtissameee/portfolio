"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { MdOutlineSaveAlt } from "react-icons/md";
import Photo from './ui/Photo';


const Hero = () => {
  return (
    <div className='pb-20 pt-36' id="home">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
           
      </div>
      <div className='flex justify-between relative my-15 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mx-3'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                
            </h2>
            <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Hi, I&apos;m Ibtissame Mesbah'/>
            <h2 className='uppercase tracking-widest text-m text-center text-blue-100 max-w-85'>
                 Currently a Last Year Software Engineering Student in ENSAO . I am Looking For a PFE Internship
            </h2>
            {/*<a href="/assets/Ibtissame_Mesbah_s_CV (2).pdf" download="assets/Ibtissame_Mesbah_s_CV (2).pdf">
                <MagicButton
                    title="Download Resume"
                    icon={<MdOutlineSaveAlt/>}
                    position='right'/>
            </a>*/}

        </div>
        <div>
            <Photo/>
        </div>

      </div>
      
    </div>
  )
}

export default Hero
