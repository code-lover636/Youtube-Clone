import React from 'react';
import { ReactVideo } from "reactjs-media";

const VideoPage = props => {
 return(
   <section className="videopage">
      <ReactVideo
            src='https://www.example.com/myvideo.mp4'
            poster='/poster.png'
            primaryColor="red"
            autoPlay
        />
   </section>
 );
}

export default VideoPage;
