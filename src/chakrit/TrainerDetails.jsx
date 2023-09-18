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

       // ฟังก์ชันเรียงลำดับตามชื่อ (a-z)
        const sortByNameAZ = () => {
            setSortName('nameAZ');
            trainers.sort((a, b) => a.name.localeCompare(b.name));
        };

        // ฟังก์ชันเรียงลำดับตามชื่อ (z-a)
        const sortByNameZA = () => {
            setSortName('nameZA');
            trainers.sort((a, b) => b.name.localeCompare(a.name));
        };

      

  return (

    <div className='trainers-container' style={{textAlign: 'center'}}>

        <h1>TrainerDetails</h1>

        <div className='activity-list' >

            <div className='activity-tennis'style={{margin:'1rem'}}>
                <button onClick={() => setFilterActivity('Tennis')}>Tennis</button>
            </div>

            <div className='activity-badminton' style={{margin:'1rem'}}>
                <button onClick={() => setFilterActivity('Badminton')}>Badminton</button>
            </div>

            <div className='activity-swim' style={{margin:'1rem'}}>
                <button onClick={() => setFilterActivity('Swim')}>Swim</button>
            </div>

            <div className='activity-yoga' style={{margin:'1rem'}}>
                <button onClick={() => setFilterActivity('Yoga')}>Yoga</button>
            </div>

            <div className='activity-aerobicdance' style={{margin:'1rem'}}>
                <button onClick={() => setFilterActivity('Aerobic Dance')}>Aerobic Dance</button>
            </div>

            <button className='mx-10 rounded bg-green-500 px-10' onClick={sortByNameAZ}>Sort by Name (A-Z)</button>
            <button onClick={sortByNameZA}>Sort by Name (Z-A)</button>
            
        </div>

        <div className='trainers-list'>

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
                .slice(0, 5)
                .map((trainer) => (
                    <div key={trainer.id} className='trainer-card'>

                        <h2>{trainer.name}</h2>

                        <img src="https://v9s7w7m6.rocketcdn.me/wp-content/uploads/2020/07/5f1394569536d5.97818895.jpg" alt="samoyed" style={{height: '100px'}}/>

                        <h2>Information</h2>
                        <h3>Activity: {trainer.activity}</h3>
                        <p>{trainer.information}</p>
                        
                    </div>
            ))}

        </div>

    </div>
    
  )
}

export default TrainerDetails