import React,{useEffect,useState} from 'react';
import './Admissions.css';
// import { httpPostAllAdmissions } from '../../Hooks/request';

import Admissionsbanner from './Admissionassets/admissionsbanner.png';
import Footer from '../Footer/Footer';

function Admissions(){
    const [presentyear, setpresentyear] = useState('');
    
   const [admissionform,setadmissionform] = useState({
    academicy:'',//academic year
    class:'', //class/standards
    notstd:'',//name of the student
    sdob:'',//student date of birth
    sage:'',//student age
    spob:'',//student place of birth
    nation:'',//nationality
    npresents:'',//name of the present school
    sfn:'',//student father name
    smn:'',//student mother name
    mn:'',//mobile number
    amn:'',//alternative mobile number
    emailid:'',//email id
    city:'',//city 
    state:'',//state
    pcode:''//pincode
   })

//    async function handlessubmitform(){
//     try{
//         if(admissionform.academicy!=='' && admissionform.class!=='' && admissionform.notstd!=='' && admissionform.mn!==''){
//             async function fetchpostadmissions(){
//                 try{
//                     const resdata = await httpPostAllAdmissions(admissionform);
//                     console.log('admission data: ',resdata);
//                 }catch(e){
//                     console.log('you got an error while posting the data ',e);
//                 }
//             }
//             fetchpostadmissions();
//         }else{
//             alert('please fill required fields');
//         }
        
//     }catch(e){
//         console.error('getting an error while submitting the form ',e);
//     }
//    }
        
    
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        setpresentyear(Number(currentYear));
    },[]);
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
                            <select value={admissionform.academicy} onChange={(e)=>setadmissionform(prev=>({
                                ...prev,
                                academicy:e.target.value
                            }))}>
                                <option value=''>Select the Academic Year</option>
                                <option value={`${presentyear}-${presentyear+1}`}>{presentyear}-{presentyear+1}</option>
                            </select>
                        </div>
                        <div className='adm-enq-fst-div1'>
                            <label>Class/Standard <span>*</span></label>
                            <select value={admissionform.class} onChange={(e)=>setadmissionform(prev=>({
                                ...prev,
                                class:e.target.value
                            }))}>
                                <option value='' disabled selected>select an option</option>
                                <option value='nursey'>Nursey</option>
                                <option value='lkg'>L.K.G</option>
                                <option value='ukg'>U.K.G</option>
                                <option value='grade1'>Grade-1</option>
                                <option value='grade2'>Grade-2</option>
                                <option value='grade3'>Grade-3</option>
                                <option value='grade4'>Grade-4</option>
                                <option value='grade5'>Grade-5</option>
                                <option value='grade6'>Grade-6</option>
                                <option value='grade7'>Grade-7</option>
                                <option value='grade8'>Grade-8</option>
                                {/* <option value='grade9'>Grade-9</option>
                                <option value='grade10'>Grade-10</option> */}
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
                                    <input type='text' value={admissionform.notstd} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        notstd:e.target.value
                                    }))}/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Date of Birth<span>*</span></label>
                                        <input type='text' value={admissionform.sdob} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        sdob:e.target.value
                                    }))}/>
                                    </div>
                                </div>
                                {/* contact info form second div */}
                                <div className='contact-info-form-three'>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Age<span>*</span></label>
                                        <input type='number' value={admissionform.sage} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        sage:e.target.value
                                    }))}/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Place of Birth</label>
                                        <input type='text' value={admissionform.spob} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        spob:e.target.value
                                    }))}/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Nationality</label>
                                        <input type='text' value={admissionform.nation} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        nation:e.target.value
                                    }))}/>
                                    </div>
                                </div>
                                 {/* contact info form third div */}
                                 <div className='contact-info-form-three'>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Name of the present school, if any</label>
                                        <input type='text' value={admissionform.npresents} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        npresents:e.target.value
                                    }))}/>
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
                                    <input type='text' value={admissionform.sfn} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        sfn:e.target.value
                                    }))}/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Mother Name <span>*</span></label>
                                        <input type='text' value={admissionform.smn} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        smn:e.target.value
                                    }))}/>
                                    </div>
                                </div>
                                {/* contact info form second div */}
                                <div className='contact-info-form-three'>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Mobile No.<span>*</span></label>
                                        <input type='number' value={admissionform.mn} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        mn:e.target.value
                                    }))}/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Alternate Mobile No.</label>
                                        <input type='number' value={admissionform.amn} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        amn:e.target.value
                                    }))}/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Email-Id<span>*</span></label>
                                        <input type='email' value={admissionform.emailid} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        emailid:e.target.value
                                    }))}/>
                                    </div>
                                </div>
                                 {/* contact info form third div */}
                                 <div className='contact-info-form-three'>
                                    <div className='adm-enq-fst-div1'>
                                        <label>City<span>*</span></label>
                                        <input type='text' value={admissionform.city} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        city:e.target.value
                                    }))}/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>State</label>
                                        <input type='text' value={admissionform.state} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        state:e.target.value
                                    }))}/>
                                    </div>
                                    <div className='adm-enq-fst-div1'>
                                        <label>Pin Code <span>*</span></label>
                                        <input type='text' value={admissionform.pcode} onChange={(e)=>setadmissionform(prev=>({
                                        ...prev,
                                        pcode:e.target.value
                                    }))}/>
                                    </div>
                                 </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='admission-submit-btn'>
                            {/* <button onClick={()=>handlessubmitform()}>Submit</button> */}
                            <button>Submit</button> 
                        </div>
                        {/*  */}
                    <div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Admissions;
