import React, {useState} from 'react';
import { Figure, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const [userProfile, setUP] = useState(null);

  return (
    <>
      <div className="profile-content">
        <ProfilePic profile={userProfile}/>
        <UserInfo profile={userProfile} />
      </div>
    </>
  )
}

const ProfilePic = (props) => {
  return (
    <div className="profile-pic">
        <Figure className="user-pic">
          {props.profile ? 
            <Image src={props.profile.userImageSrc} thumbnail /> :
            <FontAwesomeIcon icon={faUser} style={{maxHeight: "200px", width: "150px", minHeight: "180px"}}/>}
            <Link to="/Profile/EditProPic"><Figure.Caption>Edit Picture</Figure.Caption></Link>
        </Figure>
    </div>
  );
}

const UserInfo = (props) => {
  return (
    <p className="user-info">
      Member since: <br/>
      Current expiration: <br/>

    </p>
  )
}