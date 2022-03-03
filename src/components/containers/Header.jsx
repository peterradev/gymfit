import React from 'react'
import './header.css'
import weights from '../../assets/weights.jpg';

const Header = () => {
  return (
    <header className='gradient_bg'>
        <div className="header__content">
            <h1 className='header__hero gradient-text'>Let's Build Your Habit with GymTrack</h1>
            <p>The one source you will need to be able to track your lifts from anywhere in the world. A totally customizable workout anytime you need, tracking your progress whenever</p>

            <section className="header__input ">
                <input type="email" placeholder='Your Email Address'/>
                <button type='button'>Get Started</button>
            </section>  
        </div>
        <div className="image">
            <img src={weights} alt="" />
        </div>



    </header>
  )
}

export default Header