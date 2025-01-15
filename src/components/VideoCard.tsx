"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';

export function VideoCard ({id, title, src, poster} : { 
    id: number, 
    title: string,
    src: string,
    poster: string | undefined,
  } ) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  
  const startVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };
  const stopVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const time = (Number(e.target.value) / 100) * video.duration;
      video.currentTime = time;
      setProgress(Number(e.target.value));
    }
  };

  return (
    <Link
      href={`${id}`}
      className='relative group whitespace-nowrap text-ellipsis overflow-hidden block font-medium rounded-md'
      draggable="false"  
    >
      <video
        className='w-full mb-0'
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        onTimeUpdate={handleTimeUpdate}
        onMouseEnter={startVideo}
        onTouchStart={startVideo}
        onMouseLeave={stopVideo}
        onTouchEnd={stopVideo}
        ></video>
        <div className="controls relative bottom-3 leading-[0]">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
            className="appearance-none w-full h-1 bg-gray-300 rounded-full cursor-pointer focus:outline-none opacity-0 group-hover:opacity-75 transition-opacity ease-in duration-150"
            style={{
              background: `linear-gradient(to right, #335bf4 0%, #2fe9c9 ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`,
            }}
          />
        </div>
        {title}
    </Link>
  )
}
