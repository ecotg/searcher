import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import { expect } from 'chai';
const sinon = require('sinon');
import { Result } from "../../../components/result";
import { InfiniteResult } from "../../../components/scroll";
import { mount } from "enzyme";

describe('InfiniteResult' , () => {
    let component;
    let props;
    beforeEach(() => {
        props = { results: [{volumeInfo: {}}], loadMore: sinon.stub()};
        component = mount( <InfiniteResult {...props} />);
    });
    describe('search returns results', () => {
        it('renders a result list', () => {
            expect(component.find(Result).length).to.equal(1);
        });
        it('passes on the correct props to the result list', () => {
            expect(component.find(Result).prop('results')).deep.equal(props.results);
        });
    });
});