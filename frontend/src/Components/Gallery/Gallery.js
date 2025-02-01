import React,{useEffect, useState} from 'react';
import './Gallery.css';
import Promo from './Galleryasset/promo.mp4';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Footer from '../Footer/Footer';

// image gallery
import g1 from './Galleryasset/g1.jpg';
import g2 from './Galleryasset/g2.jpg';
import g3 from './Galleryasset/g3.jpg';
import g4 from './Galleryasset/g4.jpg';
import g5 from './Galleryasset/csr.jpg';
import g6 from './Galleryasset/g6.jpg';
import g7 from './Galleryasset/g7.jpg';
import g8 from './Galleryasset/g8.jpg';
import g9 from './Galleryasset/sports1.jpg';
import g10 from './Galleryasset/g10.jpg';

function Gallery(){
    const [cptovdo,setcptovdo] = useState(false);
    useEffect(()=>{
        window.scrollTo({top:0,behavior:'instant'});
    },[]);
    return(
        <>
            <div className='gallery-con'>
                <div className='video-container'>
                    <video  className='video-tag' autoPlay muted loop>
                        <source src={Promo} type='video/mp4'/>
                        Your browser does not support the video tag.
                    </video>
                    <p>Gallery</p>
                </div>
                <div className='gallery-images'>
                    <div className='gallery-img-header'>
                        <h1>Gallery</h1>
                        <p>A gallery is a visually organized collection of images or visual content, 
                            designed to showcase and present artistic, thematic, or informational material 
                            in a coherent and aesthetically pleasing manner.</p>
                    </div>
                    <div className='gallery-phots-videos-btn'>
                        <button className={`${cptovdo===false?'activeb':''}`} onClick={()=>setcptovdo(false)}>Photos</button>
                        <button className={`${cptovdo===false?'':'activeb'}`} onClick={()=>setcptovdo(true)}>videos</button>
                    </div>
                    <div className='responsive-masonry-div'>
                        {
                            cptovdo===false?
                            <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1,450:2, 699: 3}} gutter="1rem"
                    >
                        <Masonry>
                        <div className='gallery-img-inner-item'>
                            <img src={g1} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g2} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g3} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g4} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g5} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g6} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g7} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g8} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g9} alt="gallery-pics"/>
                        </div>
                        <div className='gallery-img-inner-item'>
                            <img src={g10} alt="gallery-pics"/>
                        </div>
                        </Masonry>
                    </ResponsiveMasonry>:
                    <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1,450:2, 699: 3}} gutter="1rem"
                >
                    <Masonry>
                    {/* <div className='gallery-img-inner-item'>
                        <img src={g1} alt="gallery-pics"/>
                    </div>
                    <div className='gallery-img-inner-item'>
                        <img src={g2} alt="gallery-pics"/>
                    </div>
                    <div className='gallery-img-inner-item'>
                        <img src={g3} alt="gallery-pics"/>
                    </div> */}
                    <div className='gallery-img-inner-item'>
                    <iframe  src="https://www.youtube.com/embed/sgJrlelkeoI?si=3QtxzaEzJRY8BMN9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    {/* <div className='gallery-img-inner-item'>
                        <img src={g5} alt="gallery-pics"/>
                    </div>
                    <div className='gallery-img-inner-item'>
                        <img src={g6} alt="gallery-pics"/>
                    </div>
                    <div className='gallery-img-inner-item'>
                        <img src={g7} alt="gallery-pics"/>
                    </div>
                    <div className='gallery-img-inner-item'>
                        <img src={g8} alt="gallery-pics"/>
                    </div>
                    <div className='gallery-img-inner-item'>
                        <img src={g9} alt="gallery-pics"/>
                    </div>
                    <div className='gallery-img-inner-item'>
                        <img src={g10} alt="gallery-pics"/>
                    </div> */}
                    </Masonry>
                </ResponsiveMasonry>
                        }
                    
                    </div>
                    

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Gallery;