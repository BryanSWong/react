import React from 'react';

import Login from '../../../src/components/Login/Login';

describe('Login Component', () => {

    const component = shallow(<Login debug />);

    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

});