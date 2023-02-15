import React , { useState, useEffect } from 'react'

const TarjetFilterJob = ({text, onClick}) => {
const [isMounted, setIsMounted] = useState(false)
useEffect(() => {
setIsMounted(true)
}, [])

  return (
    <div className='flex justify-between items-center w-[200px]  rounded-md py-3 px-3 text-white-100 bg-violet-500'>
        <span className='text-sm'>{text}</span>
        <button onClick={onClick}><img src="https://icongr.am/clarity/close.svg?size=26&color=ffffff" alt="" /></button>
    </div>
  )
}

export default TarjetFilterJob