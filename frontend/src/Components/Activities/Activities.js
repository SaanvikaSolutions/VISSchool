import React from 'react';
import './Activities.css';
import Activitieslogo from './Actassets/activities.png';

import Cultural from './Actassets/cultural.webp';
import Events from './Actassets/events.png';
import Sciencefair from './Actassets/sciencefair.jpg';
import service from './Actassets/service.jpg';
import sports from './Actassets/sports.webp';

function Activities(){

    

    // const items = [
    //     <img src={Cultural} alt='cultural'/>,
    //     <img src={Sciencefair} alt='sciencefair'/>,
    //     <img src={Events} alt='events'/>,
    //     <img src={sports} alt='sports'/>
    // ]

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
                        <p>Demonstrate the ability to improve the range, quality and complexity of their skills Understand 
                            and apply appropriate strategies and tactics Develop social awareness and problem-solving skills to work 
                            independently and as part of a team within a safe, learner-friendly environment Foster an understanding and appreciation 
                            of the role activity plays in promoting health-related fitness</p>
                    </div>
                </div>
                {/* 2nd */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={Cultural} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>cultural</h1>
                        <p>Demonstrate the ability to improve the range, quality and complexity of their skills Understand 
                            and apply appropriate strategies and tactics Develop social awareness and problem-solving skills to work 
                            independently and as part of a team within a safe, learner-friendly environment Foster an understanding and appreciation 
                            of the role activity plays in promoting health-related fitness</p>
                    </div>
                </div>
                {/* 3rd */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={service} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>service</h1>
                        <p>Demonstrate the ability to improve the range, quality and complexity of their skills Understand 
                            and apply appropriate strategies and tactics Develop social awareness and problem-solving skills to work 
                            independently and as part of a team within a safe, learner-friendly environment Foster an understanding and appreciation 
                            of the role activity plays in promoting health-related fitness</p>
                    </div>
                </div>
                {/* 4th */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={Sciencefair} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>sciencefair</h1>
                        <p>Demonstrate the ability to improve the range, quality and complexity of their skills Understand 
                            and apply appropriate strategies and tactics Develop social awareness and problem-solving skills to work 
                            independently and as part of a team within a safe, learner-friendly environment Foster an understanding and appreciation 
                            of the role activity plays in promoting health-related fitness</p>
                    </div>
                </div>
                {/* 5th */}
                <div className='third-con-each'>
                    <div className='third-con-each-img'>
                        <img src={Events} alt='sports'/>
                    </div>
                    <div className='third-con-each-para'>
                        <h1>Events</h1>
                        <p>Demonstrate the ability to improve the range, quality and complexity of their skills Understand 
                            and apply appropriate strategies and tactics Develop social awareness and problem-solving skills to work 
                            independently and as part of a team within a safe, learner-friendly environment Foster an understanding and appreciation 
                            of the role activity plays in promoting health-related fitness</p>
                    </div>
                </div>
                
            </div>
            
        </>
    );
}

export default Activities;