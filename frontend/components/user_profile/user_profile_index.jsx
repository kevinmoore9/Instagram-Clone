import React from 'react';
import { Link, withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
// import ProfileIndexItem from './profile_index_item';
import ProfileHeader from './profile_header';

class UserProfileIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos(this.props.params.userId);
    this.props.fetchUser(this.props.params.userId);
  }

  componentWillUpdate(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.fetchPhotos(newProps.params.userId);
      this.props.fetchUser(newProps.params.userId);
    }
  }


  render() {
    return (
      <div className="user-profile" >
        <ProfileHeader />
        <div className="profile-index">
          {this.props.photos.map(
            photo => <img src={photo.image_url}
                          className="profile-index-image"
                          key={photo.id}/>
        )}
        </div>
      </div>
      );
  }
}

export default withRouter(UserProfileIndex);
