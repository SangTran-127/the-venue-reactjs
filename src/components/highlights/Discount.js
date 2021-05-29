import React, {useState, useEffect} from 'react'
import {Fade, Slide} from 'react-awesome-reveal'
import MyButton from '../../components/utils/MyButton'
function Discount() {
    const countEnd = 30
    const [start, setStart] = useState(0)
    const percentage = () => {
        if (start < countEnd) {
            setStart( (prevCount) =>
                prevCount + 1)
        }
    }
    useEffect(() => {
        if (start > 0 && start < 30) {
            setTimeout(()=>{
                setStart(prevCount => prevCount + 1)
            }, 30)
        }
    }, [start])
    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade 
                    onVisibilityChange={(inView)=>{

                        if (inView) {
                            percentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase this fucking ticket before July 12</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <MyButton/>
                </Slide>
            </div>
        </div>
    )
}   
export default Discount