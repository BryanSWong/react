import React from 'react';

import App from '../../../src/components/App/App';

describe('App Component', () => {

    const component = shallow(<App debug />);

    it('should render correctly in "debug" mode', () => {
        expect(component).toMatchSnapshot();
    });

});