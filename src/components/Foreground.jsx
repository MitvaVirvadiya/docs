import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)

    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident? // downloading  with progress bar",
            fileSize: 4.7,
            downloading: true,
            clickDownload: false
        },
        {
            desc: "my name is mitva virvadiya, this is my resume // you can see card and download",
            fileSize: 12.5,
            downloading: false,
            clickDownload: false
        },
        {
            desc: "Hey, vandan are u seeing this download it now. // asking to download on clicking download button",
            fileSize: 6.9,
            downloading: false,
            clickDownload: true
        }
    ]
  return (
    <div ref={ref} className='w-full h-full top-0 left-0 fixed z-[3] p-5 flex gap-5 flex-wrap'>
        {data.map((item, index) => (
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground