import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';
import Toolbar from '@material-ui/core/Toolbar';


describe('Navbar', () => {
    it('should contain a toolbar', () => {
        const wrapper = shallow(<Navbar />);
        const toolbar = wrapper.find(Toolbar);
        
    })
})