import React from 'react'

function Banner() {
  return (
    <div>
      <img
        src="/img/coursesimg.png"
        alt="Course"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="absolute w-28 h-28 border-2 border-white/40 rounded-full animate-ping"></span>
        <span className="absolute w-30 h-30 border-2 border-white/30 rounded-full"></span>
        <span className="absolute w-45 h-45 border-2 border-white/20 rounded-full"></span>

        <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg cursor-pointer">
          <img
            src="/img/icon/play.png"
            alt="Play"
            className="w-6 h-6 ml-1"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
