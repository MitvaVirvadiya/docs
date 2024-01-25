import React from 'react'

function Background() {
  return (
    <>
        <div className='fixed w-full h-full z-[2]'>
            <div className='absolute top-[5%] w-full flex justify-center text-xl font-semibold text-zinc-600 py-10'>Documents.</div>
            <h4 className='absolute text-zinc-900 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-tight tracking-tighter font-semibold'>Docs.</h4>
        </div>
    </>
  )
}

export default Background