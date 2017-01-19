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
    console.log("mount");
    this.props.fetchPhotos(this.props.params.userId);
    this.props.fetchUser(this.props.params.userId);
  }

  shouldComponentUpdate(newProps) {
    return true;
  }

  componentWillUpdate(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      console.log("update");
      this.props.fetchPhotos(newProps.params.userId);
      this.props.fetchUser(newProps.params.userId);
    }
  }


  render() {
    console.log("render");
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
