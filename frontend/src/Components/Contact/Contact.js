import React,{ useEffect, useState} from 'react';
import './Contact.css';
// import Contactus from './contactassets/contactus.jpeg';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Footer from '../Footer/Footer';
// import { httpGetAllContacts, httpPostAllContacts } from '../../Hooks/request';
function Contact(){
    const [feelfreedata,setfeelfreedata]= useState({
        name:'',
        email:'',
        phone:'',
        cate:'',
        area:'',
        msg:''
    });

    // async function senddata(){
    //     try{
    //         if(feelfreedata.name!=='' && feelfreedata.email!=='' && feelfreedata.phone!=='' && feelfreedata.cate!=='' 
    //         && feelfreedata.area!=='' && feelfreedata.msg!==''){
    //             async function fetchpostcontacts(){
    //                 try{
    //                     const resdata = await httpPostAllContacts(feelfreedata);
    //                     console.log('posting data: ',resdata);
    //                 }catch(e){
    //                     console.log('you got an error while posting the data ',e);
    //                 }
    //             }
    //             fetchpostcontacts();
    //         }else{
    //             alert('please fill the form');
    //         }
    //     }catch(e){
    //         alert('you got an error while adding the data!!',e);
    //     }
    // }

    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
        // async function fetchContacts(){
        //     try{
        //         const data = await httpGetAllContacts();
        //         console.log('data: ',data);
        //     }catch(e){
        //         console.log('you got an error while fetching ',e);
        //     }
        // }
        // fetchContacts();
    },[]);
    return(
        <>
            <div className='contact-con'>
                <div className='conatct-form'>
                    <p>Contact With Us</p>
                    <h1>Feel Free to Write us Anytime</h1>
                    <div className='contact-inner-form'>
                        {/* first div */}
                        <div>
                            <input type='text' placeholder='Name' value={feelfreedata.name} onChange={(e)=>setfeelfreedata(prev=>({
                                ...prev,
                                name:e.target.value
                            }))}/>
                            <input type='email' placeholder='Email Address' value={feelfreedata.email} onChange={(e)=>setfeelfreedata(prev=>({
                                ...prev,
                                email:e.target.value
                            }))}/>
                        </div>
                        {/* second div */}
                        <div>
                            <input type='number' placeholder='Phone' value={feelfreedata.phone} onChange={(e)=>setfeelfreedata(prev=>({
                                ...prev,
                                phone:e.target.value
                            }))}/>
                            <select placeholder='select option' value={feelfreedata.cate} onChange={(e)=>setfeelfreedata(prev=>({
                                ...prev,
                                cate:e.target.value
                            }))}>
                                <option value='student'>student</option>
                                <option value='teacher'>teacher</option>
                                <option value='parent'>parent</option>
                            </select>
                        </div>
                        {/* thirs div */}
                        <div>
                            <input type='text' placeholder='Area' value={feelfreedata.area} onChange={(e)=>setfeelfreedata(prev=>({
                                ...prev,
                                area:e.target.value
                            }))}/>
                        </div>
                        <textarea placeholder='Write a Message' value={feelfreedata.msg} onChange={(e)=>setfeelfreedata(prev=>({
                            ...prev,
                            msg:e.target.value
                        }))}/>
                        {/* <button onClick={()=>senddata()}>send a message</button> */}
                        <button >send a message</button>

                    </div>
                </div>
            </div>
            <div className='contact-info'>
                <div>
                    <CallIcon  sx={{ fontSize: 40,color:'#f57a25' }} className='mailoutlineicon'/>
                    <h1>Admissions :</h1>
                    <p>9613138888 / 7569838928</p>
                    <h1>Accounts Department :</h1>
                    <p>9613138888</p>
                    <h1>Admin Office :</h1>
                    <p>7569838928</p>
                </div>
                <div>
                    <MailOutlineIcon  sx={{ fontSize: 40 }} className='mailoutlineicon'/>
                    
                    <h1>Admissions:</h1>
                    <p>viscbsechevella@gmail.com</p>
                    
                </div>
                <div>
                    <LocationOnIcon  sx={{ fontSize: 40 ,color:'#f57a25'}} className='mailoutlineicon'/>
                    <h1>Urella, road, Chevella, Telangana 501503</h1>
                </div>
                <div>
                    <AccessTimeIcon  sx={{ fontSize: 40,color:'#f57a25' }} className='mailoutlineicon'/>
                    <h1>Office Hours</h1>
                    <h1>Monday - Friday</h1>
                    <p>8.30 AM - 5.00 PM</p>
                    <h1>Saturday</h1>
                    <p>8.30 AM - 4.00 PM</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;