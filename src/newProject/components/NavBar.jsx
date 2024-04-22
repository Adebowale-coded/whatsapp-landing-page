import React from 'react'
import logo from '../images/logo.png'

const NavBar = () => {
  return (
    <div>
        <div>
            <nav class='flex inline gap-[170px] justify-center align-middle items-center pt-6'>
                <div class='justify-end'>
                    <img src={logo} alt="" class='logo h-8'/>
                </div>
                <ul class='flex gap-5'>
                    <li>Features</li>
                    <li>Privacy</li>
                    <li>Help Center</li>
                    <li>Blog</li>
                    <li>For Business</li>
                    <li>Whatsapp Web</li>
                    <li>Download</li>
                </ul>

                <div class='bg-green-500 rounded-full py-3 px-6 border border-black'>
                    <a href="">Download</a>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default NavBar
