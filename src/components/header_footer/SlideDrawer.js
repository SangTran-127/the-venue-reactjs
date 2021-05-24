import React from 'react';
import { Drawer, List, ListItem} from '@material-ui/core'
function SlideDrawer(props) {
    return(
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.setOpen(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=>alert('clicked')}>
                    con cặc 1
                </ListItem>
                <ListItem button onClick={()=>alert('clicked')}>
                    con cặc 2
                </ListItem>
                <ListItem button onClick={()=>alert('clicked')}>
                    con cặc 3
                </ListItem>
            </List>
        </Drawer>
    )
}
export default SlideDrawer