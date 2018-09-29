import React, { Component } from 'react';

import logo from '../../images/logo/logo.png';
class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} />
            </div>
        );
    }
}

export default Header;
