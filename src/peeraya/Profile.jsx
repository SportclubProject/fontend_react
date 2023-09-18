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
