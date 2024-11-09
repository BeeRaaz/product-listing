import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import Cart from './Cart'

const Header = () => {
  return (
    <header className='py-5 bg-slate-200 sticky top-0 dark:bg-slate-800'>
        <div className="container flex flex-wrap justify-between items-center gap-5">
            <a href="#" className='text-3xl text-black hover:text-black md:text-5xl dark:text-white'>Listing</a>
            <div className="nav-right flex flex-wrap gap-4 items-center">
                <ThemeToggleButton />
                <Cart />
            </div>
        </div>
    </header>
  )
}

export default Header
