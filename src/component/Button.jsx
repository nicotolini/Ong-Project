import React from 'react'

const Button = ({bg, border, txColor, width, children}) => {
  return (
    <button className={`py-6 items-center flex justify-center  border rounded-md font-semibold h-9 ${width ? width : "w-full"} ${txColor ? txColor : ""} ${border ? border : ""} ${bg ? bg : ""}`}>{children}</button>
  )
}

export default Button