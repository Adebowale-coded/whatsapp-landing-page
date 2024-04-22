import React from 'react'
import chat from '../images/chat.png'

const KeepInTouch = () => {
    return (
        <div>
            <div class='flex align-middle items-center justify-center gap-[200px] mt-16'>
                <div class='w-[407px]'>
                    <span class='text-[60px] leading-[45px]'>Keep in touch
                        with your groups</span>
                    <br /><br />
                    <p>Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.</p>
                    <br />
                    <a href="">Learn More</a>
                </div>
                <div>
                    <img src={chat} alt="" />
                </div>
            </div>
        </div>
    )
}

export default KeepInTouch