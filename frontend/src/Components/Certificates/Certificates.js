import React from "react";
import './Certificates.css';

function Certificates(){

    return(
        <>
            <div className="certificates-con">
                <h1>Documents</h1>
                <a href="/documents/society.pdf" target="_blank" rel="noopener noreferrer">certificate of registration</a>
                <a href="/documents/CERTIFICATEOFLAND.pdf" target="_blank" rel="noopener noreferrer">certificate of land</a>
                <a href="/documents/NOC.pdf" target="_blank" rel="noopener noreferrer">No Objection Certificate</a>
                <a href="/documents/RecognitionCertificate.pdf" target="_blank" rel="noopener noreferrer">Recognition Certificate</a>
                <a href="/documents/FireSafetyCertificate.pdf" target="_blank" rel="noopener noreferrer">Fire Safety certificate</a>
                <a href="/documents/BUILDINGSAFETYCERTIFICATE.pdf" target="_blank" rel="noopener noreferrer">building safety certificate</a>
                <a href="/documents/WaterandSanitationCertificate.pdf" target="_blank" rel="noopener noreferrer">water and sanitation certificate</a>
                <a href="/documents/SELFCERTIFICATION.pdf" target="_blank" rel="noopener noreferrer">slef certification</a>
                <a href="/documents/watertestingreport.pdf" target="_blank" rel="noopener noreferrer">water testing report</a>
            </div>
        </>
    );
}

export default Certificates;