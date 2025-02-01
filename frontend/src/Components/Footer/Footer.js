import React, { useEffect, useState } from 'react';
import './Footer.css';
import Vislogo from '../../Assets/vislogo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useNavigate} from 'react-router-dom';
function Footer(){
    const [presentyear, setpresentyear] = useState('');
    const navigate = useNavigate();
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
                        <h1>Vivekananda School</h1>
                    </div>
                    <p style={{fontWeight:400,fontSize:'14px'}}  className='footer-para' >
                        Vivekananda School prioritizes holistic education and student development through innovative curriculum and nurturing environments.
                    </p>
                    <p className='footer-para' style={{marginTop:15}}>Urella road, Devuni yeravally(V), Chevella(M), Ranga Reddy(D), Telangana, 501503.</p>
                </div>
                {/* all pages */}
                <div>
                    <div>
                        <h1>pages</h1>
                    </div>
                    <ul>
                        <li onClick={()=>navigate('/')}>Home</li>
                        <li onClick={()=>navigate('/about')}>About</li>
                        <li onClick={()=>navigate('/academics')}>Academics</li>
                        <li onClick={()=>navigate('/activities')}>Activities</li>
                        <li onClick={()=>navigate('/gallery')}>Gallery</li>
                    </ul>
                </div>
                {/* services */}
                <div>
                    <div>
                        <h1>services</h1>
                    </div>
                    <ul>
                        <li onClick={()=>navigate('/facilities')}>facilities</li>
                        <li onClick={()=>navigate('/careers')}>careers</li>
                        <li onClick={()=>navigate('/admissions')}>admissions</li>
                        <li onClick={()=>navigate('/faq')}>FAQs</li>
                        <li onClick={()=>navigate('/contact')}>contact</li>
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
                            <p>9613138888 / 7569838928</p>
                        </li>
                        <li>
                            <MailIcon/>
                            <p>viscbsechevella@gmail.com</p>
                        </li>
                        <li>
                            <LocationOnIcon/>
                            <p>Urella road, Devuni yeravally(V), Chevella(M), Ranga Reddy(D), Telangana, 501503.</p>
                        </li>
                    </ul>
                </div>
                {/* social media */}
                {/* <div>
                    <h1>Social Media</h1>
                    <div className='footer-services'>
                        <a href='https://www.facebook.com/profile.php?id=100090426615902' style={{color:'black'}} rel="noreferrer" target="_blank"><FacebookIcon/></a>
                        <a href='https://www.instagram.com/viscbsechevella/' style={{color:'black'}} rel="noreferrer" target="_blank"><InstagramIcon/></a>
                        <TwitterIcon/>
                        <LinkedInIcon/>
                        
                    </div>
                </div> */}
            </div>
            <div className='footer-last-one'>
                <p>© {presentyear} Saanvika Software Solutions </p>
                <div className='footer-services'>
                    <a href='https://www.facebook.com/profile.php?id=61554504095624' style={{color:'white'}} rel="noreferrer" target="_blank"><FacebookIcon/></a>
                    <a href='https://www.instagram.com/saanvika.solutions/' style={{color:'white'}} rel="noreferrer" target="_blank"><InstagramIcon/></a>
                    <a href='https://www.linkedin.com/in/saanvika-software-solutions-a6514b2a5/' style={{color:'white'}} rel="noreferrer" target="_blank"><LinkedInIcon/></a>
                        {/* <TwitterIcon/> */}
                        {/* <LinkedInIcon/> */}
                        
                </div>
            </div>
        </>
    );
}

export default Footer;