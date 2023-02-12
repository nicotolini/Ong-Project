import React from 'react'
import Footer from '../component/Footer'
import { SubHeading } from '../component/SubHeading'

const CompanyProfile = () => {
  return (
    <>
        <SubHeading title="Webtton" />
        <main className=' bg-white-200 py-10'>
            <div className='flex w-full gap-10 container mx-auto '>
                <div className=' w-[70%] border bg-white-100 rounded-xl '>
                    <div className='flex   py-6 border-b-[1px] border-black border-opacity-50 h-[160px] '>
                        <img src="footerICON.png" alt="" className='pl-6'/>
                        <div className='flex flex-col justify-center'>
                            <h4 className='font-bold text-2xl'>Webtton</h4>
                            <div className='flex'>
                                <img src="/locationicon.svg" alt="" />
                                <span>Seoul, Korea</span>
                            </div>
                        </div>
                    </div>
                    <div className='  py-6  mx-auto'>
                        <div className='flex flex-col gap-7 w-full px-10 text-xl'>
                            <h4 className='font-bold'>Job Description</h4>
                            <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempore earum dicta itaque explicabo odio asperiores est. Eveniet distinctio itaque sequi deserunt? Odio excepturi ipsam labore! Perferendis ex rem debitis, blanditiis est repellat! Repellat provident facere sed perspiciatis assumenda ab at nulla voluptatum eum non, eius tempore aspernatur nihil ut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio numquam repellat accusamus porro, placeat quia cum sint error facere, aliquam officiis quod illum delectus mollitia, earum voluptatem nihil ipsum </p>
                            <h4 className='font-bold'>Responsability</h4>
                            <ul className='flex flex-col gap-6 list-disc pl-6'>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit.</li>
                            </ul>
                            <h4 className='font-bold'>Qualification</h4>
                            <ul className='flex flex-col gap-6 list-disc pl-6'>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border w-[30%]  text-xl flex flex-col gap-10'>
                    <div className='bg-white-100 rounded-xl '>
                        <div className='flex items-center px-6 h-[80px] border-b-[1px] border-black border-opacity-50'>
                            <h4 className='font-bold'>Job Summary</h4>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-6 list-disc pl-10 pt-8 pb-12 font-semibold '>
                                <li>Published: </li>
                                <li>Vacancy: </li>
                                <li>Salary: </li>
                                <li>Location: </li>
                                <li>Job Nature: </li>
                                <li>Date Line: </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center p-3 bg-white-100 rounded-xl '>
                        <span>Share: </span>
                        <a href="#"><img src="https://icongr.am/entypo/facebook.svg?size=30&color=6e6e6e" alt="" /></a>
                        <a href="#"><img src="https://icongr.am/entypo/instagram.svg?size=30&color=6e6e6e" alt="" /></a>
                        <a href="#"><img src="https://icongr.am/entypo/twitter.svg?size=30&color=6e6e6e" alt="" /></a>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default CompanyProfile