import React from 'react'
import { useState } from "react";
import './ProfileCard.css'

const ProfileCard = ({user}) => {

  const [isFollowing, setIsFollowing] = useState(false);

  return (
     <div className="profile-card">
      <h2>{user.name}</h2>
      <p>{user.role}</p>

      <button className="profile-button" onClick={() => setIsFollowing((prev) => !prev)}>
        {isFollowing ? "Following" : "Follow"}
      
      </button>
    </div>
  )
}

export default ProfileCard