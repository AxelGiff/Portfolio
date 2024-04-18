import React from 'react';

function VideoComponent({video,size}) {
  return (
    <figure className="flex justify-center items-center">
      <video autoPlay muted loop  className={size}>
        <source src={video} type="video/mp4" />
      </video>
    </figure>
  );
}

export default VideoComponent;