import React from 'react';
import { Link, withRouter } from 'react-router';
import { fetchUser, updateUser } from '../../actions/user_actions';
import ProfileHeader from './profile_header';
import NavBar from '../navbar/navbar';

import { Modal, Button } from 'react-bootstrap';


class UserProfileIndex extends React.Component {
  constructor(props) {
    super(props);
    this.profileDetail = null;
    this.photos = null;
    this.state = {showModal: false, photo: null};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }


  componentWillMount() {
    this.props.fetchPhotos(this.props.params.userId);
    this.props.fetchUser(this.props.params.userId);
  }

  shouldComponentUpdate(newProps) {
    const photos = Object.values(store.getState().photos);
    return photos.every(photo => photo.user_id == this.props.params.userId);
  }

  componentWillUpdate(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.fetchPhotos(newProps.params.userId);
      this.props.fetchUser(newProps.params.userId);
    }
  }

  close() {
    this.setState({showModal: false});
  }

  open(pic) {
    this.setState({showModal: true, photo: pic});
    console.log(this.state);
  }


  renderProfile() {
    let modalStyle = this.state.showModal ? "block" : "none";
    return(
      <div className="user-profile" >
        <ProfileHeader updateUser={this.props.updateUser}/>
        <div className="profile-index">
          {this.props.photos.map(
            photo => <img src={photo.image_url}
                          key={photo.id}
                          onClick={() => this.open(photo)}

                          className="profile-index-image"/>
        )}
        </div>



        { this.state.photo ?

        <div className="modal-background" style={ {display: modalStyle} }>
          <h2 className="modal-close" onClick={this.close}>X</h2>
          <div className="modal-main" >
              <img src={this.state.photo.image_url} className="modal-img"/>
              <div className="modal-sidebar">
                <div className="sidebar-header">
                  <img className="modal-profile-img" src={this.state.photo.user_profile_url} />
                  <h2 className="modal-username">{this.state.photo.username}</h2>
                </div>
              </div>
          </div>
        </div>

        : null
      }





      </div>
    );
  }

  render() {
    const photos = Object.values(store.getState().photos);
    return (
       photos.every(photo => photo.user_id == this.props.params.userId) ? this.renderProfile() : null
      );
  }
}

export default withRouter(UserProfileIndex);
