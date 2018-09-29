import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import logo from '../../images/logo/logo.png';

describe('Header', () => {
    it('should contain logo', () => {
        const wrapper = shallow( < Header / > );
        const wrapperLogo = wrapper.find('img');
        expect(wrapperLogo.props().src).toBe(logo);
    })
})
