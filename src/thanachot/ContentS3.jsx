import { useState,useEffect} from 'react'
import {CustomContext} from './Booking'

const inputStyle = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const inputStyleDis = "mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 bg-gray-300 leading-tight focus:outline-none focus:shadow-outline";
const label = "flex text-sm font-medium mb-2 text-gray-900";
function ContentS3({data}){
    const contextValue = useContext(CustomContext);

    const [dataf2,setdataf2] = useState({});
    const [act,setact] = useState();
    const [fname,setfname] = useState();
    const [lname,setlname] = useState();
    const [phon,setphone] = useState();
    const [des,setdes] = useState();

    
    const preData = {
        sport:data.getSport,
        location:data.getCourt,
        date:today,
        time:data.getTime.time,
        coach:data.getWho.name
    }
    useEffect(()=>{
        // switch(data.getSport){
        //     case "tennis":
        //         break;
        //     case "badminton":
        //         break;
        //     case "yoga":
        //         break;
        // }
        // const date = new Date();
        // new Date(Date.now()).toLocaleString().split(',')[0]
        // new Date(Date.now()).toLocaleString();
        // console.log(today);
    },[]);

    function getDate(status){
        const today = new Date(Date.now());

        const tomorrow = new Date(Date.now());
        tomorrow.setDate(tomorrow.getDate() + 1);

        // const today = new Date(Date.now()).toLocaleString().split(',')[0];
        switch(status){
            case "btn_day":
                return today.toLocaleString().split(',')[0];
                break;
            case "btn_tow":
                return tomorrow.toLocaleString().split(',')[0];
                break;
            default:
                return today.toLocaleString().split(',')[0];
                break;
        }
        return;
    }

    function handleBack(){

    }


    return(
        <div>
            <div>
                <h5>Contract Information</h5>
            </div>
           <form className='p-5'>
                <div>
                        <div class="grid gap-1 md:grid-cols-2">
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Sport</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={contextValue.bookdata.sport} disabled/>
                            </div>
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Location</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={contextValue.bookdata.location} disabled/>
                            </div>
                        </div>
                        
                        <div class="grid gap-1 md:grid-cols-2">
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Date</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={getDate(contextValue.bookdata.day)} disabled/>
                            </div>
                            <div>
                                <label class="flex  text-sm font-medium mb-2 text-gray-900">Time (From-To)</label>
                                <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={dataf2.time} disabled/>
                            </div>
                        </div>
                        <div>
                            <label class="flex text-sm font-medium mb-2 text-gray-900">Coach</label>
                            <input type="text" id="disabled-input" aria-label="disabled input" class={inputStyleDis} value={dataf2.coach} disabled/>
                        </div>
                </div>

                <div>
                    <label class={label}>Activity name</label>
                    <input type="text" id="activity" className={inputStyle} placeholder="Activity" onChange={(e)=>setact(e.target.value)}/>
                </div>

                <div class="grid gap-1 md:grid-cols-3">
                    <div>
                        <label for="first_name" class={label}>First name</label>
                        <input type="text" id="first_name" class={inputStyle} placeholder="John" onChange={(e)=>setfname(e.target.value)} required/>
                    </div>
                    <div>
                        <label for="last_name" class={label}>Last name</label>
                        <input type="text" id="last_name" class={inputStyle} placeholder="Doe" onChange={(e)=>setlname(e.target.value)} required/>
                    </div>
                    <div>
                        <label for="phone" class={label}>Phone number</label>
                        <input type="tel" id="phone" class={inputStyle} placeholder="098xxxx123" pattern="[0-9]{10}" onChange={(e)=>setphone(e.target.value)} required/>
                    </div>
                    {/* <div>
                        <label for="visitors" class={label}>Visitors</label>
                        <input type="number" id="visitors" class={inputStyle} placeholder="Number of visitor" required/>
                    </div> */}
                </div>
                <div className="h-32 mb-10">
                    <label class={label}>Description</label>
                    <textarea type="message" id="message" placeholder="description How can we help you?" className="resize-none h-full mb-2 shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

            <div className="m-10 flex justify-between">
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform" onClick={()=>handleBack()}>Back</button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform">Next</button>
            </div>

           </form>
        </div>
    );
}

export default ContentS3;

