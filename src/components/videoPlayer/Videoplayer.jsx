import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/video.mp4'

const Videoplayer = ({playstate , setPlaystate}) => {
    const exit = useRef()
    const pauseVideo=(e)=>{
  if(e.target === exit.current){
    return setPlaystate(false)
  }
    }
  return (
    <div className={`video-player ${playstate ? '' : 'hide'}`} ref={exit} onClick={pauseVideo}>
       <video src={video} autoPlay muted controls ></video>
    </div>
  )
}

export default Videoplayer
