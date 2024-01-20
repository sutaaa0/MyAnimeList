"use client"
import React from 'react'
import YouTube from 'react-youtube'

const VideoPlayers = ({ videoId }) => {
  const option = {
    width : "100%",
    height: "400"
  }
  return (
    <div>
        <YouTube videoId={videoId}
          onReady={ () => onpause}
          opts={option}
          onError={() => alert("Error Bro, coba yang lain...")}
        />
    </div>
  )
}

export default VideoPlayers