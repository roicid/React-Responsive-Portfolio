import React from 'react'
import Title from '../components/Title'
import ImageSection from './ImageSection'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'}  span={"About Me "} /> 
            <ImageSection />
            
        </div>
    )
}

export default AboutPage;
