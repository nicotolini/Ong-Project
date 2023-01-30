import React from 'react'
import Avatar from '../component/Avatar'

export const Testimonial = () => {
  return (
    <section className='h-[570px] bg-white-200 relative  '>
      <div className='lg:absolute flex flex-col top-[10%] 2xl:right-[6%] right-[0] lg:items-start items-center text-center lg:text-start lg:gap-10 text-shadow gap-3'>
        <h2 className='lg:text-4xl text-3xl font-semibold items-center'>Testimonial</h2>
        <p className='lg:text-2xl text-xl 2xl:max-w-[700px] max-w-[500px]  px-3'>“Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.”</p>
      </div>
      <div className='flex flex-wrap gap-[1px] py-4  justify-center'>
        <Avatar className={"lg:absolute left-[190px] top-0 lg:w-[200px] w-[25%]"} image={"./Testinomi8.svg"}/>
        <Avatar className={"lg:absolute left-[115px] lg:top-[135px] lg:w-[200px] w-[25%]"} image={"./Testinomi7.svg"}/>
        <Avatar className={"lg:absolute left-[34px] lg:top-[40px] lg:w-[200px] w-[25%]"} image={"./Testinomi6.svg"}/>
        <Avatar className={"lg:absolute left-[52px] lg:top-[267px] lg:w-[200px] w-[25%]"} image={"./Testinomi5.svg"}/>
        <Avatar className={"lg:absolute left-[180px] lg:top-[300px] lg:w-[200px]  w-[25%]"} image={"./Testinomi4.svg"}/>
        <Avatar className={"lg:absolute left-[167px] lg:top-[480px] lg:w-[200px] w-[25%]"} image={"./Testinomi3.svg"}/>
        <Avatar className={"lg:absolute left-[338px] lg:top-[420px] lg:w-[200px] w-[25%]"} image={"./Testinomi2.svg"}/>
        <Avatar className={"lg:absolute left-[335px] lg:top-[16%] xl:w-[400px] lg:w-[200px] w-[25%]"} image={"./Testinomi1.svg"}/>
      </div>
    </section>
  )
}
