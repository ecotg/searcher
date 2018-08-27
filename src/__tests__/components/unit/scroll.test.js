import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { mount } from "enzyme";
import React from "react";
const sinon = require('sinon');
import { Result } from "../../../components/result";
import { Scroll } from "../../../components/scroll";

Enzyme.configure({ adapter: new Adapter() });

describe('Scroll' , () => {
    let component;
    let props;
    beforeEach(() => {
        props = { results: [{volumeInfo: {}}], loadMore: sinon.stub()};
        component = mount( <Scroll {...props} />);
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