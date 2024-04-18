import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const handleKeyPress = (e) => {
    const video = videoRef.current;
    if (!video) return;

    switch (e.key) {
    case ' ':
      if (video.paused) video.play();
      else video.pause();
      break;
    case 'ArrowRight':
      video.currentTime += 10; // Fast forward 10 seconds
      break;
    case 'ArrowLeft':
      video.currentTime -= 10; // Rewind 10 seconds
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <video ref={videoRef} src={src} width="640" controls>
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
