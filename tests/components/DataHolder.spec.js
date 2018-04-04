import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DataHolder from '../../app/components/DataHolder';

Enzyme.configure({ adapter: new Adapter() });

describe('<DataHolder/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<DataHolder/>);
    });

    it('Making sure it renders the main element', () => {
        expect(wrapper.find('div.data')).to.exist;
    });

    it('Making sure it has <TileLayer/> element defined', () => {
        expect(wrapper.find('div.data').text()).to.contain('I\'m data');
    });
});
