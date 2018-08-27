import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import { expect } from 'chai';
const sinon = require('sinon');
import { mount } from "enzyme";
import { Search } from "../../../components/search";


describe('Search', () => {
    let handleTxtChange = sinon.stub();
    let handleSearch = sinon.stub();
    let props;
    let component;
    const event = { value: 'query'};
    beforeEach(() => {
        props = { handleTxtChange, handleSearch, query: 'test-query' };
        props.handleTxtChange.reset();
        props.handleSearch.reset();
        component = mount( <Search {...props} />);
    });

    describe('User enters text', () => {
        beforeEach(() => {
            component.find('input').simulate('change', event);
        });
        it('should call the correct function to save the current query', () => {
            sinon.assert.called(props.handleTxtChange);
        });
    });
    describe('User clicks the button to search', () => {
        beforeEach(() => {
            component.find('button').simulate('click');
        });
        it('should trigger search', () => {
            sinon.assert.called(props.handleSearch);
            sinon.assert.calledWith(props.handleSearch, 'test-query');
        });
    });
    describe('User hits the enter button to search', () => {
        beforeEach(() => {
            component.find('input').simulate('keypress', {key: 'Enter'});
        });
        it('should trigger search', () => {
            sinon.assert.called(props.handleSearch);
            sinon.assert.calledWith(props.handleSearch, 'test-query');
        });
    });
});