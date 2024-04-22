import React from 'react'
import converse from '../images/converse.png'
const AnotherSection = () => {
    return (
        <div class='bg-[#1c1e21]'>
            <div class='p-20'>
                <div class='flex flex-row align-middle mx-auto gap-10 items-center justify-center'>
                    <div>
                        <img src={converse} alt="" class=''/>
                    </div>
                    <div class='w-[47%]'>
                        <span class='text-white text-[40px] w-[5px] leading-[30px]'>Speak <br/><b class='text-[#25d366]'>freely</b></span>
                        <p class='text-[18px] font-[400px] text-white break-words leading-[25px] w-[449px] h-[100px] mt-4'>With end-to-end encryption, your personal messages and calls are secured. Only you and the person you're talking to can read or listen to them, and nobody in between, not even WhatsApp.</p>
                        <br/>
                        <a href="" class='text-white'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnotherSection