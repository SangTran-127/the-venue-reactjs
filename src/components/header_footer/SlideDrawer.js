import React from 'react';
import { Drawer, List, ListItem} from '@material-ui/core'
function SlideDrawer(props) {
    const link = [
        {where: 'featured',value: 'To top'},
        {where: 'venuenfo',value: 'Venue NFO'},
        {where: 'hightlights',value: 'Hightlights'},
        {where: 'location',value: 'Location'}
    ]
    const renderItem = (item) => {
        return (
            <ListItem button onClick={()=>alert(item.where)} key={item.where}>
                    {item.value}
            </ListItem>
        )
    }
    return(
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.setOpen(false)}
        >
            <List component="nav">
                {link.map((item) => {remderItem(item)})}
            </List>
        </Drawer>
    )
}
export default SlideDrawer