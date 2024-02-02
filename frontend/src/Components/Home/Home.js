import React, { useState,useEffect } from 'react';
import './Home.css';
import Homepic from './hassets/homepic.png';
import weltvis from './hassets/discussion.jpg';

function Home(){
    const [philosophy,setphilosophy] = useState(false);
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
            <div className='home-sec-con'>
                <div className='home-sec-con-img'>
                    <img src={weltvis} alt='weltovis'/>
                </div>
                <div className='home-sec-welcome-vis'>
                    <p className='home-sec-welcome-vis-head'>welcome to VIS</p>
                    <h1>We are the refreshing change in education</h1>
                    <p className='home-sec-welcome-vis-sec-p'>
                        Welcome to the school that celebrates India, celebrates your child, instils a sense 
                        of pride about the country and most importantly, builds a foundation so that 
                        your child and our country have a lot more to share with this world. Truly 
                        international thoughts, ideas, concepts, people, professionals, philosophies, 
                        science, mathematics, art, a way of life and more. Presenting SCHOOL OF INDIA® 
                        (CBSE Affiliation Code - 830681), for the next generation of Indians. Inspired by 
                        the country that has taught the world. A school where tomorrow's India is born today; 
                        Where Nationalism precedes internationalism; Where everyone celebrates India and every student is 
                        proud of Being Indian.
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
        </>
    );
}

export default Home;