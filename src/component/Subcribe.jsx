import React, { useState } from 'react'
import Input from './Input'
const Subcribe = () => {
  const [value, setValue] = useState("")
  return (
    <div className='flex flex-col gap-7 w-full bg-black '>
      <h3 className='font-black text-2xl text-white'>Subcribe</h3>
      <div className='relative '>
        <button className='py-0.5 md:px-[10px] px-2 text-sm md:text-xl bg-violet-200 opacity-85 text-white rounded-[4px] absolute md:top-[14px] top-[15px] right-[8px] cursor-pointer translate-x-[2px]'>Subcribe</button>
      <Input
      className="border md:p-[11px] p-2 w-full mt-1   bg-transparent  border-white rounded-md text-sm text-white  placeholder-white outline-none"
      handleOnChange={(e) => {setValue(e.target.value);}}
      placeholder="Email"
      type={"email"}
      value={value}
      />
      </div>
    </div>
  )
}

export default Subcribe
