import React, {useEffect, useState, useCallback} from 'react'
import {Slide} from 'react-awesome-reveal'
function TimeUntil() {
    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    })
    const renderItem = (time, value) => {
        return (
            <div className="countdown_item">
                <div className="countdown_time">{time}</div>
                <div className="countdown_tag">{value}</div>
            </div>
        )
    }
    const getTimeDeadline = useCallback( (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date())
        if (time < 0) {
            console.log('day passed');
        } else {
            const seconds = Math.floor((time/1000) % 60)
            const minutes = Math.floor((time/1000/60) % 60)
            const hours = Math.floor((time/1000/60/60) % 24)
            const days = Math.floor((time/1000/60/60/24))
            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }, [])
    useEffect( () => {
        setInterval( ()=> getTimeDeadline('Jul, 12, 2021, 00:00:00'), 1000 )
    }, [getTimeDeadline] )
    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event start in
                </div>
                <div className="countdown_bottom">
                    {renderItem(time.days, 'days')}
                    {renderItem(time.hours, 'hours')}
                    {renderItem(time.minutes, 'minutes')}
                    {renderItem(time.seconds, 'seconds')}
                </div>
            </div>
        </Slide>
    )
}
export default TimeUntil
