import React ,{useEffect} from 'react';
import './Activities.css';
import Activitieslogo from './Actassets/activities.jpeg';

import Cultural from './Actassets/cultural.jpg';
import Events from './Actassets/events.jpg';
import Sciencefair from './Actassets/sciencefair.jpg';
import service from './Actassets/service.jpg';
import sports from './Actassets/sports.jpg';

import Footer from '../Footer/Footer';

function Activities(){

    

    // const items = [
    //     <img src={Cultural} alt='cultural'/>,
    //     <img src={Sciencefair} alt='sciencefair'/>,
    //     <img src={Events} alt='events'/>,
    //     <img src={sports} alt='sports'/>
    // ]
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);

    return(
        <>
            <div className='activitieslogo-con'>
                <div>
                    <img src={Activitieslogo} alt='activitieslogo' />
                </div>
                <p>Activities</p>
            </div>
            <div className='activities-head'>
                {/* first image */}
                <div className='activities-head-each'>
                    <div>
                        <img src={sports} alt='/sports'/>
                    </div>
                    <p>sports</p>
                </div>
                {/* second image */}
                <div className='activities-head-each'>
                    <div>
                        <img src={Cultural} alt='cultural'/>
                    </div>
                    <p>cultural</p>
                </div>
                {/* third image */}
                <div className='activities-head-each'>
                    <div>
                        <img src={Sciencefair} alt='sciencefair'/>
                    </div>
                    <p>Sciencefair</p>
                </div>
                {/* fourth image */}
                <div className='activities-head-each'>
                    <div>
                        <img src={service} alt='service'/>
                    </div>
                    <p>service</p>
                </div>
                {/* fifth image */}
                <div className='activities-head-each'>
                    <div>
                        <img src={Events} alt='events'/>
                    </div>
                    <p>Events</p>
                </div>
            </div>
            {/* third container */}
            <div className='third-con'>
                {/* 1st */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={sports} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>sports</h1>
                        <p>Our sports programs enhance physical, mental, and social well-being. Students improve their athletic skills, learn strategies, and develop teamwork and 
                            problem-solving abilities. In a safe, supportive environment, they work independently and collaboratively, promoting health-related fitness and a lifelong love 
                            for physical activity. Sports at our school build character, resilience, and a healthy lifestyle.</p>
                    </div>
                </div>
                {/* 2nd */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={Cultural} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>cultural</h1>
                        <p>Our cultural programs celebrate diversity and creativity, encouraging students to explore art, traditions, and expressions. 
                            Through music, dance, drama, and art, students build confidence and self-expression. We foster an inclusive environment, promoting 
                            respect for different cultures and enhancing social awareness. Cultural activities inspire creativity, build connections, and deepen 
                            understanding of the world.</p>
                    </div>
                </div>
                {/* 3rd */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={service} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>service</h1>
                        <p>Our support services ensure every student receives the guidance and resources they need to thrive. From academic 
                            counseling to wellness programs, we provide a nurturing environment that promotes personal and academic growth. Our 
                            dedicated staff works to address individual needs, fostering a safe and inclusive space for all. These services 
                            empower students to overcome challenges, build resilience, and achieve their full potential.</p>
                    </div>
                </div>
                {/* 4th */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={Sciencefair} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>sciencefair</h1>
                        <p>Our science fairs inspire curiosity and innovation, encouraging students to explore scientific concepts and solve real-world problems. 
                            Through hands-on experiments and projects, students develop critical thinking, creativity, and problem-solving skills. The fair provides a 
                            platform to showcase their ideas, fostering confidence and a passion for discovery. It’s an opportunity to celebrate scientific inquiry and 
                            collaborative learning.</p>
                    </div>
                </div>
                {/* 5th */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={Events} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>Events</h1>
                        <p>Our events foster creativity, teamwork, and school spirit, offering students opportunities to showcase talents and interests. From festivals to 
                            competitions, these activities promote collaboration, confidence, and community. Events provide platforms for learning, growth, and celebration, 
                            creating lasting memories and enriching the school experience.</p>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    );
}

export default Activities;