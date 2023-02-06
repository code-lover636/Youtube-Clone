import React from 'react';
import {Link} from 'react-router-dom'
import VideoPage from './VideoPage';

const VideoDetails = props => {
 return(
  <Link to="/video">
    <div className="card">
      <img className="thumbnail" src={props.thumbnail} alt="thumbnail" />
      <strong>{props.title}</strong>
      <small>{props.channel}
        <span>{props.date}</span>
      </small>
    </div>
  </Link>
 );
}

export default VideoDetails;