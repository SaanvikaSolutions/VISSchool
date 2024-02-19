import React, { useEffect, useState } from 'react';
import './Footer.css';
import Vislogo from '../../Assets/vislogo.jpeg';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer(){
    const [presentyear, setpresentyear] = useState('');
    
    useEffect(()=>{
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        setpresentyear(currentYear);
    },[]);
    return(
        <>
            <div className='footercon'>
                {/* icon with description */}
                <div>
                    <div className='footer-logocon'>
                        <img src={Vislogo} alt='vislogo' className='footerlogo'/>
                        <h1>Vivekananda International School</h1>
                    </div>
                    <p className='footer-para'>
                        Vivekananda International School prioritizes holistic education and student development through innovative curriculum and nurturing environments.
                    </p>
                </div>
                {/* all pages */}
                <div>
                    <div>
                        <h1>pages</h1>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Academics</li>
                        <li>Activities</li>
                        <li>Gallery</li>
                    </ul>
                </div>
                {/* services */}
                <div>
                    <div>
                        <h1>services</h1>
                    </div>
                    <ul>
                        <li>facilities</li>
                        <li>careers</li>
                        <li>admissions</li>
                        <li>FAQs</li>
                        <li>contact</li>
                    </ul>
                </div>
                {/* contact us */}
                <div>
                    <div>
                        <h1>Contact</h1>
                    </div>
                    <ul className='contact-us-li'>
                        <li>
                            <PhoneIcon/>
                            <p>(406) 555-0120</p>
                        </li>
                        <li>
                            <MailIcon/>
                            <p>mangcoding123@gmail.com</p>
                        </li>
                        <li>
                            <LocationOnIcon/>
                            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                        </li>
                    </ul>
                </div>
                {/* social media */}
                <div>
                    <h1>services</h1>
                    <div className='footer-services'>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <LinkedInIcon/>
                        <InstagramIcon/>
                    </div>
                </div>
            </div>
            <div className='footer-last-one'>
                <p>© {presentyear} Vivekananda International School </p>
                <div className='footer-services'>
                        <FacebookIcon/>
                        <TwitterIcon/>
                        <LinkedInIcon/>
                        <InstagramIcon/>
                </div>
            </div>
        </>
    );
}

export default Footer;