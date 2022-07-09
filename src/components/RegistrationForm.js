import React from 'react'

const RegistrationForm = () => {
  return (
  <form className= 'registation-form'>
    <div className='form-control'>
      <label>Email</label>
      <input type='text' placeholder='What is your email?'
      />
    </div>
    <div className='form-control'>
      <label>Password</label>
      <input type='text'
        placeholder='Create a password'
      />
    </div>
    <div className='form-control'>
      <label>Password Confirmation</label>
      <input type='text'
        placeholder='Confirm your password'
      />
    </div>
    <input type='submit' value='Register'
    className='buttons' />
  </form>
  )
}

export default RegistrationForm
