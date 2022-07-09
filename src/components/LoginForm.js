import React from 'react'

const LoginForm = () => {
  return (
  <form className= 'login-form'>
    <div className='form-control'>
      <label>Email</label>
      <input type='text' placeholder='What is your email?'
      />
    </div>
    <div className='form-control'>
      <label>Password</label>
      <input type='text'
        placeholder='What is your password?'
      />
    </div>
    <input type='submit' value='Login'
    className='buttons' />
  </form>
  )
}

export default LoginForm
