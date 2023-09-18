import React from 'react'
import { useState } from 'react'

const Login = () => {


  return (
    <div className='login-container'>
        <img src="" alt="" />

        <form className='login'>
            <input 
                type="text" 
                name='username'
                placeholder='Username'

            />
            <input 
                type='password'
                name='password'
                placeholder='*********'

            />
            <div>
                <button></button>
                <p>Remember me</p>
                <p>Forget password?</p>
            </div>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login