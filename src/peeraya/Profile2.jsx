import React, { useState } from 'react';


function Profile2(){
    const [userList,setusers] = useState([
        {
            id: 1,
            name:"jonh son",
            description: 'Play tennis with Friends',
            date: '1/01/2023',
            time: '10:00 AM',
            location: 'Courts 1',
        },
        {
            id: 2,
            name:"Mare son",
            description: 'Play tennis with Friends',
            date: '1/01/2023',
            time: '10:00 AM',
            location: 'Courts 5',
        },
        {
            id: 3,
            name:"janny son",
            description: 'Play tennis with Friends',
            date: '1/01/2023',
            time: '10:00 AM',
            location: 'Courts 2',
        },
        {
            id: 4,
            name:"janny son",
            description: 'Play tennis with Friends',
            date: '1/01/2023',
            time: '10:00 AM',
            location: 'Courts 2',
        },
    ])

    const handleEdit=(id)=>{
        console.log(`Edit:${id}`);
        const newdata = userList.map((user)=>{
            if(user.id == id){
                return {...user,name:"pp",description:"rama2",time:"99:99 AM"}
            }
            return user;
        });
        console.log(newdata);
        setusers(newdata);
    }

    const handleDelete=(id)=>{
        console.log(id);
        var filtered = userList.filter(function(user) { return user.id != id }); //user.id=1 != id:1 false
                                                                                //user.id=2  != id:1 true
                                                                                //user.id=3 != id:1 true
                                                                                //user.id=4 != id:1 true
        console.log(filtered);
        setusers(filtered);
    }

    return(
        <div>
            <div>
                <img className="h-40 w-40 rounded-full" src="data:image/jpeg;base64,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" alt="" />
                <h1>PROFILE</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem libero asperiores. Hic optio eius porro exercitationem sunt rem excepturi possimus quia? Quae omnis corrupti deleniti accusantium dicta, molestias error.</p>
            </div>

            <div>
                {userList.map((user)=>(
                    <div className='m-5 w-1/2 border-4 border-indigo-500/100 rounded-lg'>
                        <div className='m-3'>
                            <h1>Name: {user.name}</h1>
                            <h1>Description: {user.description}</h1>
                            <h1>Date: {user.date}</h1>
                            <h1>Time: {user.time}</h1>
                            <h1>Location: {user.location}</h1>
                        </div>

                        <div>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>handleEdit(user.id)}>Edit</button>
                            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>handleDelete(user.id)}>Delete</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile2

