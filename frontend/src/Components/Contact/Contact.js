import React,{useEffect} from 'react';
import './Contact.css';
// import Contactus from './contactassets/contactus.jpeg';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


function Contact(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
    return(
        <>
            <div className='contact-con'>
                <div className='conatct-form'>
                    <p>Contact With Us</p>
                    <h1>Feel Free to Write us Anytime</h1>
                    <div className='contact-inner-form'>
                        {/* first div */}
                        <div>
                            <input type='text' placeholder='Name'/>
                            <input type='email' placeholder='Email Address'/>
                        </div>
                        {/* second div */}
                        <div>
                            <input type='number' placeholder='Phone'/>
                            <select placeholder='select option'>
                                <option>student</option>
                                <option>teacher</option>
                            </select>
                        </div>
                        {/* thirs div */}
                        <div>
                            <input type='text' placeholder='Area'/>
                        </div>
                        <textarea placeholder='Write a Message'/>
                        <button>send a message</button>

                    </div>
                </div>
            </div>
            <div className='contact-info'>
                <div>
                    <CallIcon  sx={{ fontSize: 40,color:'#4f5de4' }} className='mailoutlineicon'/>
                    <h1>Admissions :</h1>
                    <p>99000000x/787000000y</p>
                    <h1>Accounts Department :</h1>
                    <p>66600000xx</p>
                    <h1>Admin Office :</h1>
                    <p>888999222y</p>
                </div>
                <div>
                    <MailOutlineIcon  sx={{ fontSize: 40 }} className='mailoutlineicon'/>
                    <h1>General information:</h1>
                    <p>info@schoolofindia.com</p>
                    <h1>Admissions:</h1>
                    <p>admissions@schoolofindia.com</p>
                    <h1>Careers:</h1>
                    <p>hr@schoolofindia.com</p>
                </div>
                <div>
                    <LocationOnIcon  sx={{ fontSize: 40 ,color:'#4f5de4'}} className='mailoutlineicon'/>
                    <h1>Anekal Road, Bannerghatta,Bangalore – 560 083.</h1>
                </div>
                <div>
                    <AccessTimeIcon  sx={{ fontSize: 40,color:'#4f5de4' }} className='mailoutlineicon'/>
                    <h1>Office Hours</h1>
                    <h1>Monday - Friday</h1>
                    <p>8.30 AM - 3.00 PM</p>
                    <h1>Saturday</h1>
                    <p>8.30 AM - 1.00 PM</p>
                </div>
            </div>
        </>
    );
}

export default Contact;