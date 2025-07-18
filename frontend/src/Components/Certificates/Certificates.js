import React from "react";
import './Certificates.css';

function Certificates(){

    return(
        <>
            <div className="certificates-con">
                <a className="Mandatory-cer" href="/documents/Mandatory-disclosure-details.pdf" target="_blank" rel="noopener noreferrer">MANDATORY PUBLIC DISCLOSURE</a>
                <h1 style={{textTransform:'uppercase'}}>A. General Information</h1>
                <table className="general-info">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>information</th>
                            <th>Details</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr >
                            <td>1</td>
                            <td style={{textTransform:'uppercase'}}>name of the school</td>
                            <td style={{textAlign:'left'}}>
                                Vivekananda School
                            </td>
                        </tr>
                        <tr className="certificate-details">
                            <td>2</td>
                            <td style={{textTransform:'uppercase'}}>affiliation no (if applicable) </td>
                            <td style={{textAlign:'left'}}>Not yet allotted</td>
                        </tr>
                        <tr className="certificate-details">
                            <td>3</td>
                            <td style={{textTransform:'uppercase'}}>school code (if applicable)</td>
                            <td style={{textAlign:'left'}}>Not yet allotted</td>
                        </tr>
                        <tr className="certificate-details">
                            <td>4</td>
                            <td style={{textTransform:'uppercase'}}>complete address with pin code</td>
                            <td style={{textAlign:'left'}}>Sy.No  197/AA, 4-10, Urella road, Devuni yeravally(V), Chevella(M), Ranga Reddy(D), Telangana, 501503.</td>
                        </tr>
                        <tr className="certificate-details">
                            <td>5</td>
                            <td style={{textTransform:'uppercase'}}>principal name & qualification </td>
                            <td style={{textAlign:'left'}}>Dr.S.Archana & MPhil</td>
                        </tr>
                        <tr className="certificate-details">
                            <td>6</td>
                            <td style={{textTransform:'uppercase'}}>school email id</td>
                            <td style={{textAlign:'left',wordBreak:'break-word',overflowWrap:'break-word'}}>vivekanandaschoolchevella1976@gmail.com</td>
                        </tr>
                        <tr className="certificate-details">
                            <td>7</td>
                            <td style={{textTransform:'uppercase'}}>contact details (landline/mobile)</td>
                            <td style={{textAlign:'left'}}>+91-9613138888</td>
                        </tr>
                    </tbody>
                </table>

                <h1 style={{textTransform:'uppercase'}}>B. Documentation and Information</h1>
                {/* <a href="/documents/society.pdf" target="_blank" rel="noopener noreferrer">certificate of society registration</a>
                <a href="/documents/CERTIFICATEOFLAND.pdf" target="_blank" rel="noopener noreferrer">certificate of land</a>
                <a href="/documents/NOC.pdf" target="_blank" rel="noopener noreferrer">No Objection Certificate</a>
                <a href="/documents/RecognitionCertificate.pdf" target="_blank" rel="noopener noreferrer">Recognition Certificate</a>
                <a href="/documents/FireSafetyCertificate.pdf" target="_blank" rel="noopener noreferrer">Fire Safety certificate</a>
                <a href="/documents/BUILDINGSAFETYCERTIFICATE.pdf" target="_blank" rel="noopener noreferrer">building safety certificate</a>
                <a href="/documents/WaterandSanitationCertificate.pdf" target="_blank" rel="noopener noreferrer">water and sanitation certificate</a>
                <a href="/documents/SELFCERTIFICATION.pdf" target="_blank" rel="noopener noreferrer">slef certification</a>
                <a href="/documents/watertestingreport.pdf" target="_blank" rel="noopener noreferrer">water testing report</a> */}
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>certificates</th>
                            <th>view</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td style={{textTransform:'capitalize'}}>certificate of society registration</td>
                            <td>
                                <a href="/documents/society.pdf" target="_blank" rel="noopener noreferrer">
                                    view
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td style={{textTransform:'capitalize'}}>certificate of land</td>
                            <td><a href="/documents/CERTIFICATEOFLAND.pdf" target="_blank" rel="noopener noreferrer">view</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td style={{textTransform:'capitalize'}}>No Objection Certificate</td>
                            <td><a href="/documents/NOC.pdf" target="_blank" rel="noopener noreferrer">view</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td style={{textTransform:'capitalize'}}>Recognition Certificate</td>
                            <td><a href="/documents/RecognitionCertificate.pdf" target="_blank" rel="noopener noreferrer">view</a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td style={{textTransform:'capitalize'}}>Fire Safety certificate</td>
                            <td><a href="/documents/FireSafetyCertificate.pdf" target="_blank" rel="noopener noreferrer">view</a></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td style={{textTransform:'capitalize'}}>building safety certificate</td>
                            <td><a href="/documents/BUILDINGSAFETYCERTIFICATE.pdf" target="_blank" rel="noopener noreferrer">view</a></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td style={{textTransform:'capitalize'}}>water and sanitation certificate</td>
                            <td><a href="/documents/WaterandSanitationCertificate.pdf" target="_blank" rel="noopener noreferrer">view</a></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td style={{textTransform:'capitalize'}}>self certification</td>
                            <td><a href="/documents/SELFCERTIFICATION.pdf" target="_blank" rel="noopener noreferrer">view</a></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td style={{textTransform:'capitalize'}}>water testing report</td>
                            <td><a href="/documents/watertestingreport.pdf" target="_blank" rel="noopener noreferrer">view</a></td>
                        </tr>
                    
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Certificates;