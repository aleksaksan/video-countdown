"use client"
import React, { useRef, useState } from 'react';

export function VideoCard ({src, poster} : { 
    src: string,
    poster: string | undefined,
  } ) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  
  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

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

  const toggleVolume = () => {
    if (videoRef.current) {
      const newVolume = volume === 1 ? 0 : 1;
      setVolume(newVolume);
      videoRef.current.volume = newVolume;
    }
  };

  return (
    <div className='video-player text-black'>
      <video
        className=''
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onClick={toggleVolume}
        ></video>
        <div className="controls">
          <button onClick={togglePlay}>
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>

          <input
            className="input-range"
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
          />

        </div>
    </div>
  )
}
