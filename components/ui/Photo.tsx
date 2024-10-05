"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {delay: 2, duration: 0.4, ease: 'easeIn'}}}>
            <div className='relative w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] rounded-full bg-gray-100'>
                <Image
                    src="/assets/P1085947.jpg"
                    priority
                    quality={100}
                    fill
                    alt="Profile Image"
                    className='object-cover object-[center_-10px] rounded-full'/>
            </div>
        </motion.div>
      
    </div>
  )
}

export default Photo
