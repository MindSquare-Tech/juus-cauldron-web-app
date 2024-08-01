import React from 'react'
import { Fade } from 'react-awesome-reveal'

function HomePageText() {
  return (
    <div className='absolute z-10 pointer-events-none h-screen w-full text-white font-anton'>
        <Fade delay={500} triggerOnce={true}>
        <div className='text-5xl'>
            <div className='text-end font-anton pointer-events-none select-none absolute flex flex-col justify-center items-end bottom-[17%] xxxs:bottom-[13%] xxs:bottom-[16%] lg:bottom-[12.67%] xl:bottom-[13%] 3xl:bottom-[12%] 4xl:bottom-[15%] 6xl:bottom-[8%] left-[14.75%] xxxxs:left-[10%] xxxs:left-[19%] xxs:left-[12.5%] xsm:left-[15.66%] sm:left-[21%] lg:left-[24%] xl:left-[37.5%] 2xl:left-[38%] 3xl:left-[39%] 4xl:left-[38.85%] 5xl:left-[39.5%] 6xl:left-[39.15%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[5.25rem] xl:text-5xl 3xl:text-[4rem] 4xl:text-[4.25rem] 6xl:text-[5.5rem] text-snow font-semibold tracking-wide'>
                <h1>DELVE</h1>
                <h1>THE</h1>
            </div>
            <div className='font-anton pointer-events-none select-none absolute flex flex-col justify-center items-start bottom-[14%] xxxs:bottom-[10.6%] xxs:bottom-[12.5%] xsm:bottom-[13.33%] lg:bottom-[9.67%] xl:bottom-[10%] 3xl:bottom-[9%] 4xl:bottom-[12%] 6xl:bottom-[5%] right-[8.25%] xxxxs:right-[2.25%] xxxs:right-[13%] xxs:right-[5.25%] xsm:right-[9.34%] sm:right-[15%] lg:right-[19%] xl:right-[35%] 2xl:right-[36%] 3xl:right-[36.75%] 4xl:right-[36.65%] 5xl:right-[37.5%] 6xl:right-[37%] text-5xl xxxxs:text-6xl xxxs:text-5xl xxs:text-6xl lg:text-[5.25rem] xl:text-5xl 3xl:text-[4rem] 4xl:text-[4.25rem] 6xl:text-[5.5rem] text-snow font-extrabold tracking-wide'>
                <h1>INTO</h1>
                <h1>FUTURE</h1>
            </div>
        </div>
        </Fade>
    </div>
  )
}

export default HomePageText