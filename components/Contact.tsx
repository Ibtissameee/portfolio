"use client"
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Contact = () => {
  return (
    <div className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Let's 
            <span className='text-purple'> Connect</span>
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
        I’m currently looking for an internship opportunity where I can contribute and grow as a developer. If you have a position that aligns with my skills and passion, feel free to reach out—I’d love to connect!
        </p>
        <a href="mailto:ibtissam.mesbah48@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position="right"/>
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-small md:font-normal font-light'>Copyright © 2024 Ibtissame</p>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile)=>(
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-ceb
                nter backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <img src={profile.img} width={20} height={20}/>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
