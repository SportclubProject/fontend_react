import React from 'react'
import Layout from './Layout'

const ContactUs = () => {
    return(
        <Layout>
            <div className="form-contact " >
                <form >
                    <h2>Contact Us</h2>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" id="name" className='border border-sky-500'/><br />
                    <label htmlFor="name">Email : </label>
                    <input type="text" name="name" id="name" className='border border-sky-500'/><br />
                    <label htmlFor="name">Content :</label>
                    <textarea name="" id="" cols="30" rows="10" className='border border-sky-500'></textarea><br />
                    <button>Send</button>
                </form>
                <div className="info-contact">
                    <a href="tel:+66123456789">Call : +66 123 456 789</a>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs