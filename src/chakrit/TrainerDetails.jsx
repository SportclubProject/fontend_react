import React from 'react'
import { useState } from 'react';


const TrainerDetails = () => {

    const trainers = [
        {
            id: 1,
            name: "John",
            activity: "Tennis",
            information: "Professional tennis player with multiple championships.",
            img: "https://example.com/john.jpg"
        },
        {
            id: 2,
            name: "Alice",
            activity: "Badminton",
            information: "Enjoys playing badminton in the local club.",
            img: "https://example.com/alice.jpg"
        },
        {
            id: 3,
            name: "Bob",
            activity: "Swim",
            information: "Loves swimming and participates in swim competitions.",
            img: "https://example.com/bob.jpg"
        },
        {
            id: 4,
            name: "Eva",
            activity: "Yoga",
            information: "Dedicated yogi with a daily practice.",
            img: "https://example.com/eva.jpg"
        },
        {
            id: 5,
            name: "Grace",
            activity: "Aerobic Dance",
            information: "Teaches aerobic dance classes at the gym.",
            img: "https://example.com/grace.jpg"
        },
        {
            id: 6,
            name: "Michael",
            activity: "Tennis",
            information: "Competitive tennis player in regional tournaments.",
            img: "https://example.com/michael.jpg"
        },
        {
            id: 7,
            name: "Sophia",
            activity: "Swim",
            information: "Swimming enthusiast and lifeguard.",
            img: "https://example.com/sophia.jpg"
        },
        {
            id: 8,
            name: "David",
            activity: "Badminton",
            information: "Badminton player who enjoys friendly matches.",
            img: "https://example.com/david.jpg"
        },
        {
            id: 9,
            name: "Olivia",
            activity: "Yoga",
            information: "Certified yoga instructor and mindfulness advocate.",
            img: "https://example.com/olivia.jpg"
        },
        {
            id: 10,
            name: "William",
            activity: "Tennis",
            information: "Tennis coach and former professional player.",
            img: "https://example.com/william.jpg"
        }
      ];

        const [filterActivity, setFilterActivity] = useState('')
        const [sortName, setSortName] = useState('')
        // const [showInfo, setShowInfo] = useState({});

        // const toggleInfo = (id) => {
        //     console.log(id)
        //     setShowInfo((prevInfo) => ({
        //       ...prevInfo,
        //       [id]: !prevInfo[id], // เปลี่ยนสถานะการแสดงข้อมูลของ ID นี้
        //     }));
        //   };
     

  return (


    <div className='trainers-container text-center my-12'>

        <h1 className='text-7xl'>Trainer Details</h1>

        <div className='activity-list flex gap-5 justify-center p-5 mt-5'>

            <div className='activity-tennis py-3 px-5 bg-green-500 rounded-xl w-1/6'>
                <button onClick={() => setFilterActivity('Tennis')}>Tennis</button>
            </div>

            <div className='activity-badminton py-3 px-5 bg-green-500 rounded-xl w-1/6'>
                <button onClick={() => setFilterActivity('Badminton')}>Badminton</button>
            </div>

            <div className='activity-swim py-3 px-5 bg-green-500 rounded-xl w-1/6'>
                <button onClick={() => setFilterActivity('Swim')}>Swim</button>
            </div>

            <div className='activity-yoga py-3 px-5 bg-green-500 rounded-xl w-1/6'>
                <button onClick={() => setFilterActivity('Yoga')}>Yoga</button>
            </div>

            <div className='activity-aerobicdance py-3 px-5 bg-green-500 rounded-xl w-1/6'>
                <button onClick={() => setFilterActivity('Aerobic Dance')}>Aerobic Dance</button>
            </div>         

            <div className='activity-all py-3 px-5 bg-green-500 rounded-xl w-1/6'>
                <button onClick={() => setFilterActivity('')}>All</button>
            </div>   
            
        </div>

        <div className='active-btn flex justify-end mr-10 '>
            <select 
                className='w-12 border-solid border-2 border-sky-500'
                value={sortName}
                onChange={(e) => setSortName(e.target.value)}>
                    <option value=""> </option>
                    <option value="nameAZ">A-Z</option>
                    <option value="nameZA">Z-A</option>
            </select>
        </div>

        <div className='trainers-list flex flex-wrap m-3 gap-2 justify-center'>

            {trainers
                .filter((trainers) => filterActivity === '' || trainers.activity === filterActivity)
                .sort((a, b) => {
                    if (sortName === 'nameAZ') {
                      return a.name.localeCompare(b.name);
                    }
                    if (sortName === 'nameZA') {
                      return b.name.localeCompare(a.name);
                    }
                    return 0;
                  })
                .slice(0, 10)
                .map((trainer) => (
                    <div key={trainer.id} className='trainer-card border-solid border-2 border-sky-500 rounded-2xl w-1/6 max-w-xs cursor-pointer '>

                        <h2 className='my-3'>{trainer.name}</h2>

                        <img className='w-fit m-auto' src="https://v9s7w7m6.rocketcdn.me/wp-content/uploads/2020/07/5f1394569536d5.97818895.jpg" alt="samoyed" style={{height: '100px'}}/>

                        <div className='px-4 mt-3 object-cover flex jus'>
                            <h2 className='text-start'>Information</h2>
                            {/* <button  onClick={() => toggleInfo(trainer.id)}>
                                {showInfo[trainer.id] ? 'Hide' : 'Show'}
                            </button> */}
                        </div>
                        

                        {/* <div className={`px-4 my-3 object-cover ${showInfo[trainer.id] ? 'block' : 'hidden'}`}> */}
                        <div className='px-4 mb-3 object-cover'>
                            
                            <h3 className='text-start'>Activity: {trainer.activity}</h3>
                            <p className='text-start'>{trainer.information}</p>
                        </div>
                        
                    </div>
            ))}

        </div>

    </div>
    
  )
}

export default TrainerDetails