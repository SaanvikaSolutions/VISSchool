import React from 'react';
import './Admissions.css';

import Admissionsbanner from './Admissionassets/admissionsbanner.jpg';

function Admissions(){
    return(
        <>
            <div className='admissions-banner-img'>
                <img src={Admissionsbanner} alt='admissions-banner'/>
            </div>
            <div className='admissions-header'>
                <div className='admissions-header-div'>
                    <h1>Admissions</h1>
                    <p>
                        On being offered a seat, parents will be given two weeks of time to pay the prescribed fee to secure the same. Parents further need to fill and submit few forms and declarations that would be given along with admissions acceptance letter. Before allowing the student to take up his/her place, a transfer certificate should be lodged with the admissions office from the previous school of the student.
                    </p>
                </div>
                <div className='admissions-header-div'>
                    <h1>
                        school visit
                    </h1>
                    <p>
                        You are most welcome to visit the school for an informal discussion, with or without your child. This can be done by fixing a prior appointment with the Principal.
                    </p>
                </div>
            </div>
            <div className='admissions-form'>
                <div className='admission-form-con'>
                    <h1 className='admission-form-con-header'>Admission Enquiry</h1>
                    {/* admission enquiry first part */}
                    <div className='adm-enq-fst'>
                        <div className='adm-enq-fst-div1'>
                            <label>Academic Year <span>*</span></label>
                            <select>
                                <option>2024-2023</option>
                            </select>
                        </div>
                        <div className='adm-enq-fst-div1'>
                            <label>Class/Standard <span>*</span></label>
                            <select>
                                <option disabled selected>select an option</option>
                                <option>Nursey</option>
                                <option>L.K.G</option>
                                <option>U.K.G</option>
                                <option>Grade-1</option>
                                <option>Grade-2</option>
                                <option>Grade-3</option>
                                <option>Grade-4</option>
                                <option>Grade-5</option>
                                <option>Grade-6</option>
                                <option>Grade-7</option>
                                <option>Grade-8</option>
                                <option>Grade-9</option>
                                <option>Grade-10</option>
                            </select>
                        </div>
                        </div>
                        {/* admission enquiry second part */}
                        <div className='adm-enq-third'>
                            <h1 className='admission-form-con-header'>Personal Information Of Child.</h1>
                            <div className='adm-enq-third-inner'>
                                {/* contact info form first div*/}
                                <div className='contact-info-form'>
                                    <div className='adm-enq-fst-div1'>
                                    <label>Name of the Student<span>*</span></label>
                                    <input type='text'/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Date of Birth<span>*</span></label>
                                        <input type='text'/>
                                    </div>
                                </div>
                                {/* contact info form second div */}
                                <div className='contact-info-form-three'>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Age<span>*</span></label>
                                        <input type='text'/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Place of Birth</label>
                                        <input type='text'/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Nationality</label>
                                        <input type='text'/>
                                    </div>
                                </div>
                                 {/* contact info form third div */}
                                 <div className='contact-info-form-three'>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Name of the present school, if any</label>
                                        <input type='text'/>
                                    </div>
                                 </div>
                            </div>
                        </div>
                        {/* admission enquiry third part */}
                        <div className='adm-enq-third'>
                            <h1 className='admission-form-con-header'>Contact Information</h1>
                            <div className='adm-enq-third-inner'>
                                {/* contact info form first div*/}
                                <div className='contact-info-form'>
                                    <div className='adm-enq-fst-div1'>
                                    <label>Father Name <span>*</span></label>
                                    <input type='text'/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Mother Name <span>*</span></label>
                                        <input type='text'/>
                                    </div>
                                </div>
                                {/* contact info form second div */}
                                <div className='contact-info-form-three'>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Mobile No.<span>*</span></label>
                                        <input type='text'/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Alternate Mobile No.</label>
                                        <input type='text'/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Email-Id<span>*</span></label>
                                        <input type='text'/>
                                    </div>
                                </div>
                                 {/* contact info form third div */}
                                 <div className='contact-info-form-three'>
                                    <div className='adm-enq-fst-div1'>
                                        <label>City<span>*</span></label>
                                        <input type='text'/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>State</label>
                                        <input type='text'/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Pin Code <span>*</span></label>
                                        <input type='text'/>
                                    </div>
                                 </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='admission-submit-btn'>
                            <button>Submit</button>
                        </div>
                        {/*  */}
                    <div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Admissions;
