import React from 'react'
import firstImg from '../images/firstImg.png'
import secImage from '../images/secondImg.png'

const ImgSection = () => {
  return (
    <div>
        <div class='w-[95%] align-middle mx-auto pt-9'>
            <img src={firstImg} alt="" />
        </div>

        <div class='mx-auto mt-[55px] w-[95%] font-xl  text-center'>
            <span class='text-[50px] justify-center leading-[40px] mx-auto text-center '>With private messaging and calling, you can <br/>be yourself, speak freely and feel close to the <br/>most important people in your life no matter<br/> where they are.</span>
        </div>

        <div class='w-[95%] align-middle mx-auto pt-9'>
            <img src={secImage} alt="" />
        </div>
    </div>
  )
}

export default ImgSection