import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';


configure({adapter: new Adapter()});

describe('NavigationItems ', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two NavigationItem elements if not authenticated', () => {
        expect(wrapper.find(NavigationItems)).toHaveLength(2);
    });


    it('should render three NavigationItem elements if not authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItems)).toHaveLength(3);
    });

    it('should render an exact logout button', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItems link="/">Logout</NavigationItems>)).toEqual(true);
    });

});