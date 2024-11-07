import React from 'react'

const Button = ({ btnText="Submit", bgColor="black", textColor="white", hoverBgColor="transparent", hoverTextColor="black" }) => {
  return (
    <button className={`bg-${bgColor} text-${textColor} text-xl py-3 px-8 border border-${bgColor} dark:bg-white dark:border-white dark:text-black dark:hover:bg-transparent dark:hover:text-white rounded-md w-full md:w-fit transition-colors ease-linear duration-300 hover:bg-${hoverBgColor} hover:text-${hoverTextColor}`}>
      {btnText}
    </button>
  )
}

export default Button
