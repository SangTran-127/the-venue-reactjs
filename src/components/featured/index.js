import React from 'react'
import Carrousel from './Carrousel'
import TimeUntil from './timeUntil'
function Featured() {
    return (
        <div className="featured_container">
            <Carrousel />
            <div className="artist_name">
                <div className="wrapper">
                    Sáng đẹp chai
                </div>
            </div>
            <TimeUntil />
        </div>
    )
} 
export default Featured