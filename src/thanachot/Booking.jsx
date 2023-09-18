import { useState,useEffect} from 'react'
import './Booking.css'
import HowtoS1 from './HowtoS1';
import ContentS1 from './ContentS1';
import ContentS2 from './ContentS2';
import SummaryS1 from './SummaryS1';
import HowtoS2 from './HowtoS2';

function Booking(){
    const [Howto,setHowto] = useState(<HowtoS1 />);
    const [Content,setContent] = useState(<ContentS1 
                                            changeTostep2={changeHowtoS2}
                                            changeContentS2={changeContentS2}
                                            />);
    const [Summary,setSummary] = useState(<SummaryS1 />);


    useEffect(()=>{
        
    },[]);

    function handleNext(){
        setHowto(<HowtoS1 />)
        setContent(<ContentS1 
            changeTostep2={changeHowtoS2}
            changeContentS2={changeContentS2}
            />)

    }

    function changeHowtoS2(sport){
        setHowto(<HowtoS2 />);
    }
    function changeContentS2(sport){
        setContent(<ContentS2 sport={sport}/>)
    }


    return(
        <div>
            <div className='page_title'>
                <h1>Booking</h1>
            </div>

            <div className='page_body h-[90vh]'>
                <div className='bodyHowTo'>
                    <h1>how to book</h1>
                    {Howto}
                </div>

                <div className='bodyContent'>
                    <h1>Content</h1>
                    {Content}
                </div>

                <div className='bodySummary'>
                    <h1>Summary</h1>
                    {Summary}
                </div>
            </div>

            <div >
                <div className='page_footer flex justify-between'>
                    <button className='bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform' onClick={handleNext}>Booking</button>
                    {/* <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform' onClick={handleNext}>Next Step</button> */}
                    
                </div>
            </div>
        </div>

    );
}


export default Booking