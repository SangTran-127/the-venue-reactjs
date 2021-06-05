import React from 'react'
import MyButton from '../utils/MyButton'
import {Zoom} from 'react-awesome-reveal'
function Pricing() {
    const priceState = {
        prices: [100, 150, 200],
        position: ['Suck', 'Medium', 'Premium'],
        desc: [
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
            '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
            '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give'
        ],
        linkto: [
            'https://facebook.com',
            'https://instagram.com',
            'https://twitter.com'
        ],
        delay: [500, 0, 500]
    }
    const showBoxes = () => {
        return (
            priceState.prices.map((box, index) => {
                return(
                    <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>${priceState.prices[index]}</span>
                                <span>${priceState.position[index]}</span>
                            </div>
                            <div className="pricing_description">
                                {priceState.desc[index]}
                            </div>
                            <div className="pricing_buttons">
                                <MyButton
                                    text="Purchase"
                                    style={{
                                    }}
                                    link={priceState.linkto[index]}
                                 />
                            </div>
                        </div>
                    </Zoom>
                )
            })
        )
    }
    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                    {showBoxes()}
                </div>
            </div>
        </div>
    )
}
export default Pricing