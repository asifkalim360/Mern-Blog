import React from 'react'
import logo from "@/assets/images/logo-white.png"
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { LuLogIn } from "react-icons/lu";
import SearchBox from './SearchBox';

const Topbar = () => {
  return (
    <div className='
    flex 
    justify-between 
    items-center 
    h-16 
    fixed 
    w-full 
    z-20
    bg-white
    px-5
    border-b
    '>
      <div>
        <img src={logo} alt="logo" width={120} />
      </div>

      <div className='w-[500px]'>
        <SearchBox />
      </div>
      
      <div>
        <Button asChild>         
          <Link className='rounded-full'>
            <LuLogIn />
            Sing In
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Topbar