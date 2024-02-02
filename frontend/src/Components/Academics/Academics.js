import React,{useEffect} from 'react';
import './Academics.css';
import Academicsbanner from './Academicassets/academicsbanner.jpg';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Curriculum from './Academicassets/curriculum.PNG';
import Assignment from './Academicassets/assignment.PNG';

function Academics(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
    return(
        <>
            <div className='academic-banner'>
                <img src={Academicsbanner} alt='academics-banner'/>
            </div>
            
            <div className='academic-curriculum'>
                <div className='academic-cur-first'>
                    <h1 className='curriculum-header'>CURRICULUM RELEVANT TO TODAY’S WORLD</h1>
                    <p>We are dealing with a digital generation, affectionately called the millennials. Their 
                        world is evolving to stay more connected and open day by day. Communication plays an 
                        important role in this ultra-modern world.Our curriculum enables
                    </p>
                    <ul className='list-tasks'>
                        <li>
                            <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                            Research-based learning
                        </li>
                        <li>
                            <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                            Hands on learning experiences
                        </li>
                        <li>
                            <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                            Conducive learning environment
                        </li>
                        <li>
                            <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                            Freedom for Expression & Creativity
                        </li>
                        <li>
                            <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                            Customized learning opportunities
                        </li>
                    </ul>
                    <p>In the Pre-primary classes, teachers lay a lot of emphasis on the Play-way method. Games are a natural 
                        means of teaching little ones and an integral part of every classroom. Teachers use flash 
                        cards and digital media content to reinforce learning. Songs and rhymes are used to develop 
                        vocabulary.
                    </p>
                    <p>At the Primary level, learning is experiential, fun & activity based. The curriculum is based on the NCERT guidelines and 
                        focuses on laying the foundations of knowledge, skills and attitudes which will guide the young learners for life. The focus is 
                        on conceptual clarity by relating learning to everyday life, developing thinking and analytical skills.
                    </p>
                    <div className='academic-cur-first-inner'>
                        <h1>The learning areas at the Secondary level include:</h1>
                        <ul className='list-tasks'>
                            <li>
                                <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                                Languages (English, Hindi / Regional language and/or Sanskrit)
                            </li>
                            <li>
                                <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                                Mathematics
                            </li>
                            <li>
                                <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                                Science
                            </li>
                            <li>
                                <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                                Social Science
                            </li>
                            <li>
                                <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                                Visual & Performing Arts
                            </li>
                            <li>
                                <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                                Physical & Health Education
                            </li>
                            <li>
                                <TaskAltIcon sx={{color:'green'}} fontSize='small'/>
                                Life skills & Value Education
                            </li>
                        </ul>
                        <p>
                            Children also get opportunities to participate in various inter-school competitions, school assemblies, annual days, 
                            events &celebrations and social awareness campaigns. Our well planned and organized field trips spark excitement among students, 
                            enriching and expanding the curriculum and strengthening observation skills.
                        </p>
                    </div>
                </div>
                <div className='academic-curriculum-img'>
                    <img src={Curriculum} alt='curriculum'/>
                </div>
            </div>
            <div className='academics-assignment'>
                <div className='academics-assignment-img'>
                    <img src={Assignment} alt='assignment'/>
                </div>
                <div className='academics-assignment-first'>
                    <h1>
                        Assignment's
                    </h1>
                    <p>
                        Assessment in education involves utilizing various tools to evaluate intellectual, creative, and 
                        behavioral aspects, fostering continuous improvement. It is categorized into diagnostic, formative, and summative assessments, 
                        with weekly cycle tests, formative assessments, and collaborative parent-teacher meets ensuring ongoing support for students' 
                        academic progress and development.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Academics;