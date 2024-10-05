"use client"
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className='py-20 max-w-5xl mx-auto px-8' id="experience">
        <h1 className="heading">
            My
            <span className="text-purple"> Experiences</span>
        </h1>
        <div className="flex flex-col items-center mt-12 gap-10">
            <Button borderRadius='1.75rem' className='text-white border-neutral-50-200 dark:border-slate-800'>
                <img src="/assets/exp1.svg" alt="" className="lg:w-32 md:w-20 w-16 ml-2"/>
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>
                            PFA Internship in AFD.TECH Part Of Accenture
                        </h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>
                            Contributed to the backend development of the internal events management app, MATE, using Spring Boot, MongoDB, and Reactive Programming
                        </p>
                    </div>
                </div>
            </Button>

        </div>
      
    </div>
  )
}

export default Experience
