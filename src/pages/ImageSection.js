import React from 'react';
import about from '../img/foto-roi-iron.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>

            </div>
            <div className="about-info">
                <h4>I am <span> Roi Cid </span></h4>
                    <p className="about-text"> Im a Sofware Developer Focused on ReactJS , NodeJS and Javascript </p>
            <div className="about-details">
                    <div className="name-details">
                        <p> Full Name   </p>  
                        <p className="p-margin-left"> : Roi Cid Docabo</p>       
                    </div>

                    <div className="name-details">
                        <p> Age </p>
                        <p className="p-margin-left"> : 31 </p>       
                    </div>

                    <div className="name-details">
                        <p> Nationality </p>
                        <p className="p-margin-left"> : Argentina </p>       
                    </div>

                    <div className="name-details">
                        <p> Languages </p>
                        <p className="p-margin-left"> : Spanish , English , Portuguese</p>       
                    </div>

                    <div className="name-details">
                        <p> Location  </p>
                        <p className="p-margin-left"> : Barcelona , Spain</p>       
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default ImageSection;
