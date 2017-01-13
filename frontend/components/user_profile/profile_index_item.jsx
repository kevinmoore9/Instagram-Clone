import React from 'react';
import { Link, withRouter } from 'react-router';

const ProfileIndexItem = ({photo}) => {
  return (
    <div className="profile-index-item">
      <img src={photo.image_url}/>
    </div>
  );
};

export default withRouter(ProfileIndexItem);
