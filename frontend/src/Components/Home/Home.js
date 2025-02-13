import React, { useState,useEffect } from 'react';
import './Home.css';
import Homepic from './hassets/homepic.png';
import weltvis from './hassets/discussion.jpg';

import Footer from '../Footer/Footer';

//lets import the images
import vis1 from './hassets/vis1.jpg';
import vis2 from './hassets/vis2.jpg';
import vis3 from './hassets/vis3.jpg';
import vis4 from './hassets/vis4.jpg';
import vis5 from './hassets/vis5.jpg';

//three curriculum images
import three1 from './hassets/three1.png';
import three2 from './hassets/three2.png';
import three3 from './hassets/three3.png';

//why vis
 import hwd1 from './hassets/hwd1.png';
 import hwd2 from './hassets/hwd2.png';
 import hwd3 from './hassets/hwd3.png';
 import hwd4 from './hassets/hwd4.png';
 import hwd5 from './hassets/hwd5.png';

 //chairman message
 import cm1 from '../../Assets/cm1.jpeg';
 import cm2 from '../../Assets/cm2.jpeg';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [philosophy,setphilosophy] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
    return(
        <>
            <div className='home-con'>
                <div className='home-slides'>
                    <div>
                    <img src={Homepic} alt='homepic'/>
                    </div>
                </div>
            </div>
            
            <div className='home-page-vis-meru'>
                <h1>Welcome to vivekananda school</h1>
                <h2>As one of the nurturing schools in Hyderabad, we are a caring community school that focuses on the development and well-being of the child.</h2>
                <p>At vivekananda school, the school strives to ensure that every child is provided with everything necessary for their success. Focused on molding global citizens, vivekananda school enables 
                    young minds to not only reach the peak of their endeavors but to do so in a responsible and conscientious manner. vivekananda school CBSE Schools believes that it’s not just 
                    about the destination, but the journey that contributes to the holistic growth of children.
                </p>

                <div className='home-remain-vis15'>
                    <div>
                        <img src={vis1} alt='vis1'/>
                        <h1>Campus</h1>
                    </div>
                    <div>
                        <img src={vis2} alt='vis2'/>
                        <h1>Students & Staff</h1>
                    </div>
                    <div>
                        <img src={vis3} alt='vis3'/>
                        <h1>CBSE Curriculum</h1>
                    </div>
                    <div>
                        <img src={vis4} alt='vis4'/>
                        <h1>Library</h1>
                    </div>
                    <div>
                        <img src={vis5} alt='vis5'/>
                        <h1>Security Cameras & Security personnel</h1>
                    </div>
                </div>
            </div>

            <div className='home-page-curriculum'>
                <h1>Our Curriculum</h1>
                <p>vivekananda school, renowned for its excellence in education, ensures that every child is equipped with all they need to succeed. 
                    Our CBSE schools in Hyderabad are dedicated to molding citizens who not only achieve their aspirations but also demonstrate 
                    responsibility and conscientiousness. At vivekananda school, we believe in nurturing not just academic success, but also fostering a journey 
                    of personal growth for every child.
                </p>
            </div>
            <div className='homepage-three-curriculum'>
                <h1>We have divided our curriculum into 3 parts</h1>

                <div className='homepage-three-curriculum-boxes'>
                    <div className='homepage-three-curriculum-box-each'>
                        <div>
                            <img src={three1} alt='three1'/>
                        </div>

                        <h1>The</h1>
                        <h1>foundational</h1>
                        <h1>stage</h1>
                        <p>class 1 to 2</p>
                        <p>( 6 to 8 years )</p>
                        
                    </div>
                    <div className='homepage-three-curriculum-box-each'>
                        <div>
                            <img src={three2} alt='three2'/>
                        </div>
                        <h1>The</h1>
                        <h1>preparatory</h1>
                        <h1>stage</h1>
                        <p>class 3 to 5</p>
                        <p>( 8 to 11 years )</p>
                    </div>
                    <div className='homepage-three-curriculum-box-each'>
                        <div>
                            <img src={three3} alt='three3'/>
                        </div>
                        <h1>the</h1>
                        <h1>middle</h1>
                        <h1>stage</h1>
                        <p>class 6 to 8</p>
                        <p>( 11 to 13 years )</p>
                    </div>
                </div>
            </div>
            <div className='homepage-wwhy-vis'>
                <h1>WHY VIVEKANANDA SCHOOL?</h1>
                <p>Old School Values. New Age Methodologies</p>
                <div className='home-hwd'>
                    <div>
                        <div>
                            <img src={hwd1} alt='hwd1'/>
                        </div>
                        <p>Career Ready</p>
                    </div>
                    <div>
                        <div>
                            <img src={hwd2} alt='hwd2'/>
                        </div>
                        <p>Child safety</p>
                    </div>
                    <div>
                        <div>
                            <img src={hwd3} alt='hwd3'/>
                        </div>
                        <p>Leadership Skills</p>
                    </div>
                    <div>
                        <div>
                            <img src={hwd4} alt='hwd4'/>
                        </div>
                        <p>Successful Board Results</p>
                    </div>
                    <div>
                        <div>
                            <img src={hwd5} alt='hwd5'/>
                        </div>
                        <p>Well Trained Faculty</p>
                    </div>
                </div>
            </div>

            <div className='home-sec-con'>
                <div className='home-sec-con-img'>
                    <img src={weltvis} alt='weltovis'/>
                </div>
                <div className='home-sec-welcome-vis'>
                    <p className='home-sec-welcome-vis-head'>welcome to vivekananda school</p>
                    <h1>We are the refreshing change in education</h1>
                    <p className='home-sec-welcome-vis-sec-p'>
                    Welcome to the school that celebrates India, celebrates your child, instils a sense of pride about the country, and most importantly, builds a 
                    foundation so that your child and our nation have much more to share with the world. Truly global thoughts, ideas, concepts, people, professionals, 
                    philosophies, science, mathematics, art, a way of life, and more. Presenting SCHOOL OF INDIA®, for the next generation 
                    of Indians. Inspired by the country that has taught the world. A school where tomorrow's India is born today;
                    where everyone celebrates India, and every student is proud of being Indian.
                    </p>
                    <div className='teaching-philosophy'>
                        <div className='teaching-philosophy-st' onClick={()=>setphilosophy(prev=>!prev)}>
                            teaching philosophy
                        </div>
                        <div className={philosophy===true?'teaching-philosophy-nd':'inact-teaching-philosophy-nd'}>
                            <p>School Of India has implemented leading teaching methodologies for the best outcome. The STEAM structure explains how all the divisions of education and life work together.</p>
                            <p>STEAM = Science & Technology interpreted through Engineering & the Arts, all based in Mathematical elements.</p>
                            <p>It is a flexible interdisciplinary framework promoting a natural approach to learning.With problem-solving, fearlessness, critical thinking and making skills at its core, STEAM is not just a program but a philosophy at the School Of India.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homepage-msgch'>
                <div>
                    <h1>Message From Chairman</h1>
                    <img src={cm1} alt='cm1'/>
                    <h3>Dr. Koradala Naresh</h3>
                    <p>Meet our visionary director, Dr.KORADALA NARESH, guiding our educational mission with expertise and
                    passion.</p>
                    <p style={{color:'#f57a25',textAlign:'right',fontWeight:500,cursor:'pointer'}} onClick={()=>navigate('/about')}>know more {`>`}</p>
                </div>
                <div>
                    <h1>Message From correspondent</h1>
                    <img src={cm2} alt='cm2'/>
                    <h3>Smt. Lavanya Naresh</h3>
                    <p>Discover the driving force behind our institution, Smt. Lavanya Naresh, committed to excellence in
                    education.</p>
                    <p style={{color:'#f57a25',textAlign:'right',fontWeight:500,cursor:'pointer'}} onClick={()=>navigate('/about')}>know more {`>`}</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;