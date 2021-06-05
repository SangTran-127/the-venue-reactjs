import React from 'react'
import Button from '@material-ui/core'
import TicketIcon from '../../resources/images/icons/ticket.png'
function MyButton(props) {
    return (
        <Button>
            {props.text}
        </Button>

        )
}
export default MyButton