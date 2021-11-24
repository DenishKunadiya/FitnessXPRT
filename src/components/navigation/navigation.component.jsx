import React, { Component } from 'react'
import './navigation.styles.css'
import CustomButton from '../custom-button.component.jsx/custom-button.component';

 class Navigation extends Component {
    render() {
        return (
            <div className = 'header'>
                <a className='hello' to = '/'>Nutrition</a>
                <a className='hello' to = '/c'>Blog</a>
                <a className='hello' to = '/d'>Excercise</a>
                <a className='hello' to = '/w'><i className="bi bi-person-rolodex"></i> My Profile</a>
<CustomButton />
            </div>
        )
    }
}
export default Navigation;