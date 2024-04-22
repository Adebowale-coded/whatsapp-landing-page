import React from 'react'
import fam from '../images/fam1.png'

const NewSection = () => {
  return (
    <div class=''>
        <div class='flex align-middle items-center justify-center gap-[200px] mt-16'>
            <div class='w-[407px]'>
                <span class='text-[60px] leading-[45px]'>Never miss a moment with voice and video calls</span>
                <br/><br/>
                <p>From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.</p>
                <br/>
                <a href="">Learn More</a>
            </div>
            <div>
                <img src={fam} alt="" />
            </div>
        </div>
    </div>
  )
}

export default NewSection