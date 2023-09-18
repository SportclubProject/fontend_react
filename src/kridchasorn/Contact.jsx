import React from 'react'
import Layout from './Layout'

const inputStyle = 'border border-gray-400 rounded-md p-2 focus:outline-none focus:border-emerald-400 caret-emerald-400 placeholder:italic placeholder:text-slate-300 ';


const ContactUs = () => {
    return(
        <Layout>
            <div className="contact-container mt-40 p-0 w-full h-4/5 flex justify-center items-stretch border border-black">
            <div className="get-intouch w-2/4 text-gray-900 mt-0 p-12 flex flex-col justify-center items-start border border-red-500 ">
                <h2 className='title font-san font-semibold text-4xl text-gray-900'>Get in touch</h2>
                <p className='font-sans text-light text-gray-600 text-xl mt-10 mb-10 '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, earum. Quam reiciendis mollitia, vitae ipsa nemo maiores animi accusamus non, nulla voluptas quidem at facilis necessitatibus ab officia ea perspiciatis libero nobis porro quisquam dicta exercitationem iusto. Ratione, accusamus veritatis, minima quod at enim dignissimos optio quae earum rem libero.</p>
                <div className="address flex mt-5 items-center text-gray-600">
                    <img src="/src/assets/icons/location.png" alt="address icon" className='w-6 h-6 mr-4'/>
                    <div className="address-info">
                        <p>address</p>
                        <p>address</p>
                    </div>
                </div>
                <div className="contact-call flex mt-5 items-center ">
                    <img src="/src/assets/icons/call.png" alt="call icon" className='w-5 h-5 mr-5'/>
                    <a href="tel:+66812345678" className='call text-gray-600 hover:text-emerald-400'>Call : +66 8 1234 5678</a>
                </div>
                <div className="contact-email flex mt-6 mb-20 items-center">
                    <img src="/src/assets/icons/address.png" alt="email icon" className='w-6 h-6 mr-4'/>
                    <a href="mailto:sportclub@example.com" className='call text-gray-600 hover:text-emerald-400'>sportclub@example.com</a>
                </div>
            </div>
            <div className="form-contact w-2/4 text-gray-700 mt-0 ml-8 pt-8 border border-yellow-500 text-lg grid place-items-center " >
                <form className='flex flex-col gap-6 pt-10 pb-24'>
                    <div className="first-name flex flex-col">
                        <label htmlFor="firstname" className='relative'>First name</label>
                        <input type="text" name="firstname" id="firstname" placeholder='Jonn' className={inputStyle} />
                    </div>
                    <div className="last-name flex flex-col">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" name="lastname" id="lastname" placeholder='Doe' className={inputStyle}/>
                    </div>
                    <div className="email-contact flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='JohnDoe@example.com' className={inputStyle}/>
                    </div>
                    <div className="phone-contact flex flex-col">
                        <label htmlFor="phone-number">Phone number</label>
                        <input type="text" name="phone-number" id="phone-number" placeholder='+66 8 1234 5678' className={inputStyle}/>
                    </div>
                    <div className="message flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder='How can we help you?' cols="30" rows="3" className={inputStyle}></textarea>
                    </div>
                    <div className="btn-send-message flex justify-end">
                        <button className='w-40 border border-emrald-400 rounded-md bg-emerald-400 p-2 text-lg text-white hover:bg-emerald-600 hover:border-emerald-600'>Send Message</button>
                    </div>
                </form>
            </div>
            </div>
            <div className="show-data m-10">
                <p>First name : </p>
                <p>Last name :</p>
                <p>Email : </p>
                <p>Phone number : </p>
                <p>Message : <span className='text-red-600'>message here</span></p>
            </div>
        </Layout>
    )
}

export default ContactUs