import React, { useState } from 'react';
import App from '../App';

// const userprofile =[
//     {
//         name: "John",
//         lastnames: "Doe",
//         img: "",
//     }

// ]
// import 
const ProfileComponent = () => {
    const [name, setName] = useState ('John'); 
    const [lastname, setLastname] = useState('Doe'); 
    const [aboutme,setAboutme] = useState()
    const showProfile = async (name,lastname) => {
        
    }

    return (
        <>
            <div className="bg-sky-900">
                <h2 className='text-neutral-50 '>My Profile</h2>
            </div>
            <div>
                <img src="" alt="" />
                <p> {name}  {lastname}</p>
            </div>
            <div >
                <p> About me  {aboutme} </p>
            </div>
        </>
    )
}

export default ProfileComponent;


