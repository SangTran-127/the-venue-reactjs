import React from 'react';
import {AppBar, Toolbar, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
function Header() {

    return (
        <AppBar position="fixed" style ={{
            backgroundColor: '#2f2f2f',
            boxShadow: 'none',
            padding: '10px 0px'
        }}>
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">The venue</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default Header