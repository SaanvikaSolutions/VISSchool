import React from 'react';
import './Career.css';
import Careerbanner from './Career/careerbanner.jpg';

function Career(){
    return(
        <>
            <div className='career-banner'>
                <img src={Careerbanner} alt='career-banner'/>
                <h1>Careers</h1>
            </div>
            <p className='career-ban-head-para'>To apply, follow the careers listed below.</p>
            <div className='career-boxes'>
                <div>
                    <h1>Teaching</h1>
                    <h2>Teachers,Subject-Specific Teachers,Coaches,etc</h2>
                    <p>Explore a variety of teaching positions, from subject-specific roles to coaching opportunities, providing a range of career paths for educators passionate about fostering learning in a dynamic environment.</p>
                    <h3>Total Openings: 0</h3>
                </div>
                <div>
                    <h1>Non-Teaching</h1>
                    <h2>Human resource managers,Cafeteria members,Office staff,Cleaning staff,etc</h2>
                    <p>Discover diverse roles in our non-teaching sector, ranging from human resource managers and office staff to cafeteria and cleaning personnel, offering unique opportunities for professionals across various domains.</p>
                    <h3>Total Openings: 0</h3>
                </div>
                <div>
                    <h1>Office Admin</h1>
                    <h2>Office staff,Accountants,etc</h2>
                    <p>Explore roles within our Office Admin department, including positions for office staff and accountants, where skilled professionals contribute to the efficient functioning of our organization.</p>
                    <h3>Total Openings: 0</h3>
                </div>
                <div>
                    <h1>Transport</h1>
                    <h2>Bus Drivers,Bus Attendants,Transportation Supervisors,etc</h2>
                    <p>Join our Transportation team, where opportunities include roles such as bus drivers, bus attendants, and transportation supervisors, contributing to the smooth and safe operation of our transport services.</p>
                    <h3>Total Openings: 0</h3>
                </div>
            </div>
        </>
    );
}

export default Career;