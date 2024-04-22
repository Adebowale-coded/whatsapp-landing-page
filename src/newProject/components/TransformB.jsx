import React from 'react'
import Transform from '../images/transform.png'

const TransformB = () => {
    return (
        <div>
            <div class='flex align-middle items-center justify-center gap-[200px] mt-16'>
                <div class='w-[407px]'>
                    <span class='text-[60px] leading-[45px]'>Transform
                        your business</span>
                    <br /><br />
                    <p>WhatsApp Business helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with WhatsApp.</p>
                    <br />
                    <a href="">Learn More</a>
                </div>
                <div>
                    <img src={Transform} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TransformB