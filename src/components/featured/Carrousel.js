import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'

function Carrousel() {
    const settings = {
        dots:false,
        infinite:true, 
        autoplay:true,
        speed: 500
    }
    return(
        <div className="carrousel_wrapper"
             style = {{
                 height:`${window.innerHeight}px` 
             }}
        >
            <Slider {...settings}>
                <div>1</div> 
                <div>2</div>
                <div>3</div>
            </Slider>
        </div>
    )
}
export default Carrousel