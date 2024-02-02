import React from 'react';
import './Facilities.css';
import Student from './Facilities/student.jpg';
import student1 from './Facilities/student1.jpg';
import student2 from './Facilities/student3.jpg';
import student4 from './Facilities/student4.jpg';

import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Facilities(){
    
    return(
        <>
            <div className='facilities-banner'>
                <h1>Facilities</h1>
            </div>
            <h1 className='rooted-head'>Rooted Academics</h1>
            <div className='facilities-intro'>
                <div className='facilities-intro-video'>
                    <iframe  src="https://www.youtube.com/embed/l62SIcbCPwo?si=ZqQApQtQ1EQcRBpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='facilities-intro-content'>
                    <h1>
                        The educational philosophy emphasizes creating an inclusive environment that celebrates 
                        individual learning needs, incorporating modern educational practices tailored for the 21st 
                        century. The curriculum integrates industry best practices, interactive sessions, and cultural 
                        influences, fostering a dynamic and collaborative learning experience with a focus on 
                        individualized educational plans.
                    </h1>
                </div>
            </div>

            <div className='facilities-third-con'>
                {/* container header */}
                <div className='fac-thd-con-hd'>
                    <h1>Our Facilities</h1>
                </div>
                {/* containers will display here */}
                <div className='fac-thd-con-dis'>
                    <div>
                        <img src={Student} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Citadel Impregnable</p>
                            <h5>show more</h5>
                        </div>
                        
                    </div>
                    <div>
                        <img src={student1} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Global Dimensions</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                    <div>
                        <img src={student2} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>A Smart School</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                    <div>
                        <img src={student4} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Cyber Yard</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                    
                    <div>
                        <img src={student2} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Labs Par Excellence</p>
                            <h5>show more</h5>
                        </div>
                    </div>
                    <div>
                        <img src={student4} alt='ubbu'/>
                        <div className='fac-thd-con-dis-para'>
                            <p>Literary Paradise</p>
                            <h5>show more</h5>
                        </div>
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

export default Facilities;