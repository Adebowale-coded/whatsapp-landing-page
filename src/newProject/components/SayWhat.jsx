import React from 'react'
import woman from '../images/wom.png'

const SayWhat = () => {
    return (
        <div>
            <div class='flex align-middle items-center justify-center gap-[200px] mt-16'>
                <img src={woman} alt="" />
                <div>
                    <div class='w-[407px]'>
                        <span class='text-[60px] leading-[55px]'>Say what
                            you feel</span>
                        <br /><br />
                        <p>Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.</p>
                        <br />
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SayWhat