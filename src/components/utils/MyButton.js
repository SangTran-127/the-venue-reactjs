import React from 'react'
import Button from '@material-ui/core/Button'
import TicketIcon from '../../resources/images/icons/ticket.png'
function MyButton(props) {
    return (
        <Button
            variant="contained"
            size = {props.size ? props.size : "large"}
            href={props.link}
            style={{
                background: '#8e8e8e',
                color: '#ffffff',
                ...props.style
            }}
        >
            <img src={TicketIcon}
                className="iconImage"
                alt="icon_button" />
            {props.text}
        </Button>

        )
}
export default MyButton