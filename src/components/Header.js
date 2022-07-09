import React from 'react'
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'

const Header = () => {
  return (
    <header className='header'>
        Welcome to Sweater Weather!
        <LoginButton/>
        <RegisterButton/>
    </header>
  )
}

export default Header


  // return (
  //   <div className="page-view">
  //     <Header />
  //     <section className='hero-banner'>
  //       <h2 className="hero-banner-text">Find a forever home for your best friend.</h2>
  //       <button onClick={() => setShow(true)} className="rehome-button">Rehome Your Pet</button>
  //       <Loader heroBanner={true}/>
  //     </section>
  //     <PetContainer pets={data.getAllPets}/>
  //     <DonationFormModal
  //       show={show}
  //       onClose={() => setShow(false)}
  //     />
  //   </div>
  // )
