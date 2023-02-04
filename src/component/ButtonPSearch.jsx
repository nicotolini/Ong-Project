import React from 'react'
import { Link } from 'react-router-dom'

const ButtonPSearch = ({children, to}) => {
  return (
    <Link to={to}>
    <button className='bg-violet-300 text-white-100 px-10 py-2 rounded-md text-sm shadow-sm'>
        {children}
    </button>
    </Link>
  )
}

export default ButtonPSearch
