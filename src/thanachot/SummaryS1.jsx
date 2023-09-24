import { createContext,useContext,useState,useEffect} from 'react'
import {CustomContext} from './Booking'


// {
//     sport:"",
//     day:"",     //[today,tomoror]
//     time:"",    //[time]
//     coach:"",
//     who:{
//         id:"",
//         name:"",
//         image:"",
//         des:""
//     }
// }

function SummaryS1(){
    const contextValue = useContext(CustomContext)

    return (
        
        <div>
            <h1>Customer--------<span>GU_PP</span> </h1>
            <h1>{contextValue.bookdata.sport}</h1>
            <h1>Location: {contextValue.bookdata.location}</h1>
            <h1>{contextValue.bookdata.day}</h1>
            <h1>{contextValue.bookdata.time}</h1>
            <h1>{contextValue.bookdata.coach}</h1>

            <h1>{contextValue.bookdata.who.id}</h1>
            <h1>{contextValue.bookdata.who.name}</h1>
            <h1>{contextValue.bookdata.who.image}</h1>
            <h1>{contextValue.bookdata.who.des}</h1>
            
        
        </div>
        
    );
}

export default SummaryS1;