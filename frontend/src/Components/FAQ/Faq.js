import React,{useEffect} from 'react';
import './Faq.css';

import Footer from '../Footer/Footer';

function Faq(){
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
    return(
        <>

            <div className='faq-con'>
                <div className='faq-con-header'>
                    <h1>Frequently Asked Questions</h1>
                    <p>At Schools-Online, we pride ourselves on our excellent customer service. We realise that you may have lots of questions before committing to a website provider for your school, therefore, we have listed some of our commonly asked questions and answers. However, should you want to ask further questions or discuss your requirements in more detail, please get in touch and we will only be too happy to help.</p>
                </div>
                <div className='faq-con-content'>
                    <div>
                        <h1>How can I apply for admission to your school?</h1>
                        <p>To apply for admission, please visit our school website and navigate to the Admissions section. </p>
                        <p>There, you will find detailed instructions on the application process, along with any necessary forms to be filled out.</p>
                    </div>
                    <div>
                        <h1>What is the curriculum followed at your school?</h1>
                        <p>We follow a comprehensive curriculum that is aligned with national educational standards. Our curriculum emphasizes holistic development, incorporating academics, arts, sports, and character-building activities.</p>
                    </div>
                    <div>
                        <h1>Are there any extracurricular activities offered at your school?</h1>
                        <p>Yes, we offer a wide range of extracurricular activities to cater to various interests and talents of our students. These include sports, music, drama, debate, art, and more. Students are encouraged to explore and participate in activities beyond the classroom.</p>
                    </div>
                    <div>
                        <h1> How does your school support student well-being and mental health?</h1>
                        <p> Student well-being is a top priority at our school. We have dedicated counselors and support staff who provide guidance and assistance to students as needed. Additionally, we organize workshops and seminars on mental health awareness and coping strategies.</p>
                    </div>
                    <div>
                        <h1>What measures do you have in place for ensuring campus safety?</h1>
                        <p>We have stringent safety protocols in place to ensure the security of all students, staff, and visitors. These include restricted access points, CCTV surveillance, regular safety drills, and trained security personnel on campus.</p>
                    </div>

                    <div>
                        <h1>How do you promote diversity and inclusivity in your school?</h1>
                        <p>Diversity and inclusivity are core values of our school community. We celebrate cultural diversity through various events and activities, and our curriculum incorporates lessons on tolerance, empathy, and respect for all individuals.</p>
                    </div>
                    <div>
                        <h1> What are the transportation options available for students?</h1>
                        <p>We provide safe and reliable transportation services for students who require them. Our fleet of buses is equipped with modern amenities and supervised by trained drivers and attendants.</p>
                    </div>
                    <div>
                        <h1>How can parents get involved in school activities and events?</h1>
                        <p>We encourage parental involvement in school activities and events. Parents can volunteer for various committees, attend parent-teacher meetings, participate in school functions, and stay updated through newsletters and communication channels.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Faq;