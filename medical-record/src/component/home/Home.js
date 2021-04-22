import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Home() {
    return (
        <div id="home">
            <h1 >Hooooray!</h1>
            <div id='homePage'>
                <div className='picture'>
                    <img width='300' src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-medical-cartoon-doctor-cute-smiley-face-wear-mask-png-image_3776568.jpg'/>
                </div>
                <div className='text'>
                    <span >Welcome to the medical record app</span>
                    <br/>
                    <span>You will never struggle  with the papers again</span>
                
                    <div id='register'>
                        <div>To start using our website first you need to <Link to='/signUp' className="register"> Register</Link></div>
                        
                        <div>if you already have an account you need just to <Link to ="/signIn" className="signIn"> Sign In</Link></div> 
                    </div>
                </div>
            </div>
                {/* <img  src='https://lh3.googleusercontent.com/proxy/_58OZYidQKQ9fDvtwv2lHeGKgWQKvg3rDU9AA_PBeY5pIwiJyMS32RMdb4UivoigCOBw9vowjMKZWIOa6x0Dh_U3BbKklRg'/> */}
        </div>
    )
}
