import React from 'react'
import whatsapplg from '../images/whatsapp-wlogo.png'

const Footer = () => {
  return (
    <div class='bg-[#1c1e21] p-[7%]'>
        <div class='flex gap-[70px] justify-center'>
            <div>
                <ul class='flex flex-col gap-[100px]'>
                    <li>
                        <img src={whatsapplg} alt="" />
                    </li>
                    <li><a href="" class='bg-green-500 rounded-full py-3 px-6 border border-black'>Download</a></li>
                </ul>
            </div>
            <div class=''>
                <ul class='text-white'>
                    <li class='p-[10px] text-[11px]'>What we do</li>
                    <li class='p-[10px]'>Features</li>
                    <li class='p-[10px]'>Blog</li>
                    <li class='p-[10px]'>Security</li>
                    <li class='p-[10px]'>For Business</li>
                </ul>
            </div>

            <div class=''>
                <ul class='text-white'>
                    <li class='p-[10px] text-[11px]'>Who we are</li>
                    <li class='p-[10px]'>About us</li>
                    <li class='p-[10px]'>Careers</li>
                    <li class='p-[10px]'>Brand Center</li>
                    <li class='p-[10px]'>Privacy</li>
                </ul>
            </div>

            <div class=''>
                <ul class='text-white'>
                    <li class='p-[10px] text-[11px]'>Use Whatsapp</li>
                    <li class='p-[10px]'>Android</li>
                    <li class='p-[10px]'>Iphone</li>
                    <li class='p-[10px]'>Mac/PC</li>
                    <li class='p-[10px]'>WhatsApp Web</li>
                </ul>
            </div>

            <div class=''>
                <ul class='text-white'>
                    <li class='p-[10px] text-[11px] '>Need Help?</li>
                    <li class='p-[10px]'>Contact Us</li>
                    <li class='p-[10px]'>Help Center</li>
                    <li class='p-[10px]'>Download</li>
                    <li class='p-[10px]'>Security Advisories</li>
                </ul>
            </div>
        </div>
        <br/><br/>
        <hr />

        <div class='flex gap-[150px] justify-center align-middle items-center mt-[60px]'>
            
            <div class=''>
                <span class='text-white'>2024 © WhatsApp LLC</span>
            </div>

            <div class='text-white'>
                <span>Teams & Privacy Poliy</span>
            </div>

            <div class='text-white'>
                <p>ICONS</p>
            </div>

            <div class=''>
                <a href="" class='text-white border-[3px] border-white rounded-[80px] p-[25px] '>&nbsp;&nbsp;&nbsp;&nbsp; English &nbsp;&nbsp;&nbsp;&nbsp;</a>
            </div>
        </div>
    </div>
  )
}

export default Footer