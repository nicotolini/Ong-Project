import React from 'react'
import Button from '../component/Button'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Loking = () => {
  return (
    <section className='h-[1000px] bg-white-200'>
        <div className='clip-paht-section1 bg-violet-500  h-full flex justify-center  items-center'>
            <div data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="100"
        data-aos-duration="700" className='container'>

                <div className='  flex flex-wrap gap-40 text-white-100 text-shadow lg:justify-start justify-center lg:h-[300px]'>
                    <div className='min-w-[400px] flex flex-col gap-6'>
                        <h2 className='text-4xl pb-4 font-semibold'>Looking for a Job?</h2>
                        <p className='max-w-[350px] text-xl'>We provide online instant cash loans with quick approval</p>
                        <Button bg="bg-black" border="border-0" width="w-[40%]">Browser Job</Button>
                    </div>
                    <div className='min-w-[400px] flex flex-col gap-6'>
                        <h2 className='text-4xl pb-4 font-semibold'>Looking for a Expert?</h2>
                        <p className='max-w-[350px] text-xl'>We provide online instant cash loans with quick approval</p>
                        <Button bg="bg-black" border="border-0" width="w-[40%]">Post A Job</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
