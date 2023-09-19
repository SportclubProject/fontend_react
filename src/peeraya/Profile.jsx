
import React, { useState } from 'react';

import App from '../App';


const userprofile =[
    {
        name: "John",
        lastnames: "Doe",
        img: "",
    }

]

const ProfileComponent = () => {
    const [name, setName] = useState('Mumu'); 
    const [lastname, setLastname] = useState('mue'); 

    const showProfile = async (name,lastname) => {
        
    }

    return (
        <>
            <div>
                <h2 className='bg-red-200 min-h-screen'>My Profile</h2>
            </div>
            <div>
                <img src="" alt="" />
                <p>Name: {name}</p>
                <p>Lastname: {lastname}</p>
            </div>
        </>
    )
}

export default ProfileComponent;
=======

const userprofile = [
  {
    id: 1,
    name: "John",
    lastnames: "Doe",
    img: "",
  },
  {
    id: 2,
    name: "Julia",
    lastnames: "loe",
    img: "",
  }
]

const Profilecard = () => {
  const [showProfile, setShowProfile] = useState(); 

  const profile = () => {
    setShowProfile(
      <div>
        {userprofile.map(user => (
          <div key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Last Name: {user.lastnames}</p>
          </div>
        ))}
      </div>
    );
  }

  
  profile();

  return (
    <>
      <div className="profile-card">
        <div className="profile-header">
          <h2 className='text-neutral-50'>My Profile</h2>
        </div>
        <div className="profile-content">
          {showProfile}
        </div>
      </div>
    </>
  );
}

export default Profilecard;


