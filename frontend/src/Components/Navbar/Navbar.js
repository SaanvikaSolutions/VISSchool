import React,{useState} from 'react';
import './Navbar.css';
import Vlogo from '../../Assets/vislogo.jpeg';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';

import { useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate = useNavigate();
    const [menutoggle,setmenutoggle] = useState({
        left:false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setmenutoggle({...menutoggle,[anchor]:open});
      };
      const list = (anchor) => (
        <ul
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className="list-box"
          role="presentation"
          >
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/academics'><li>Academics</li></NavLink>
            <NavLink to='/facilities'><li>facilities</li></NavLink>
            <NavLink to='/activities'><li>activities</li></NavLink>
            <NavLink to='/careers'><li>careers</li></NavLink>
            <NavLink to='/Admissions'><li>Admissions</li></NavLink>
            <NavLink to='/gallery'><li>gallery</li></NavLink>
            <NavLink to='/faq'><li>FAQ's</li></NavLink>
            <NavLink to='/contact'><li>contact</li></NavLink>
        </ul>
        )
    return(
        <>
        <div className='nav-con'>
            <div className='nav-inner-con'>
                <div className='nav-log-outbox'>
                <div className='nav-log' onClick={()=>navigate('/')}>
                        <img src={Vlogo} alt='vlogo'/>
                        <div className='nav-log-head'>
                            <p><span>v</span>ivekananda</p>
                            <p><span>i</span>nternational</p>
                            <p><span>s</span>chool</p>
                        </div>
                </div>
                </div>
                
                
                <div className='nav-log-ul'>
                    <ul>
                        <NavLink to='/'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>home</div>
                                    <span className='btn-wrapper-bottom'>home</span>
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to='/about'>
                        <li>
                            <div className='button-wrapper'>
                                <div className='btn-wrapper-top'>About</div>
                                <span className='btn-wrapper-bottom'>About</span>
                            </div>
                        </li>
                        </NavLink>

                        <NavLink to='/academics'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>Academics</div>
                                    <span className='btn-wrapper-bottom'>Academics</span>
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to='/facilities'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>facilities</div>
                                    <span className='btn-wrapper-bottom'>facilities</span>
                                </div>
                            </li>
                        </NavLink>
                        
                        <NavLink to='/activities'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>activities</div>
                                    <span className='btn-wrapper-bottom'>activities</span>
                                </div>
                            </li>
                        </NavLink>
                            
                        <NavLink to='/careers'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>careers</div>
                                    <span className='btn-wrapper-bottom'>careers</span>
                                </div>
                            </li>
                        </NavLink>
                        
                        <NavLink to='/admissions'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>Admissions</div>
                                    <span className='btn-wrapper-bottom'>Admissions</span>
                                </div>
                            </li>
                        </NavLink>
                        
                        <NavLink to='/gallery'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>gallery</div>
                                    <span className='btn-wrapper-bottom'>gallery</span>
                                </div>
                            </li>
                        </NavLink>

                        <NavLink to='/faq'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>FAQ's</div>
                                    <span className='btn-wrapper-bottom'>FAQ's</span>
                                </div>
                            </li>
                        </NavLink>
                        
                        <NavLink to='/contact'>
                            <li>
                                <div className='button-wrapper'>
                                    <div className='btn-wrapper-top'>contact</div>
                                    <span className='btn-wrapper-bottom'>contact</span>
                                </div>
                            </li>
                        </NavLink>
                       
                    </ul>
                </div>
                <div className='nav-res' onClick={toggleDrawer('left', true)}>
                    <div className='nav-res-lines'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>menu</p>
                </div>
            </div>
        </div>
        <Drawer
            anchor={'left'}
            open={menutoggle['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </>
    );
}

export default Navbar;