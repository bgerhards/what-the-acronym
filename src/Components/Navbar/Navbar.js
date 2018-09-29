import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        What the Acronym?
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
