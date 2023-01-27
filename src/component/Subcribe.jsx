import React, { useState } from 'react'
import Input from './Input'
const Subcribe = () => {
  const [value, setValue] = useState("")
  return (
    <div className='flex flex-col gap-1 w-full bg-black p-1'>
      <h3 className='font-semibold text-xl text-white'>Subcribe</h3>
      <div className='relative '>
        <button className='py-1 px-[10px] bg-violet-200 opacity-85 text-white rounded-[4px] absolute top-[14px] right-[8px] cursor-pointer translate-x-[2px]'>Subcribe</button>
      <Input
      className="border p-[11px] w-full mt-1   bg-transparent  border-white rounded-md text-sm text-white  placeholder-white outline-none"
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
