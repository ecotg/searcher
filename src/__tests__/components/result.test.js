import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import { expect } from 'chai';
import { Book } from "../../components/book";
import { Result } from "../../components/result";
import { mount } from "enzyme";

const DEFAULT_IMG = "http://www.free-icons-download.net/images/open-book-icon-67666.png";

describe('Result', () => {
    let props;
    let component;
    let info;
    beforeEach(() => {
        info = { title: 'title', subtitle: 'subtitle', id: 'id' };
        props = { results: [{ volumeInfo: info }]};
        component = mount( <Result {...props} />);
    });

    describe('receives a prop object', () => {
        it('always renders a div', () => {
            expect(component.find("div").findWhere((item) => {
                    return item.hasClass('search-results')
             })).to.have.lengthOf(1);
        });

        describe('search returned results', () => {
            it('renders a book item', () => {
                expect(component.find(Book).length).to.equal(1);
            });
            it('passes in the correct title', () => {
                expect(component.find(Book).prop('title')).to.equal(['title', 'subtitle'].join('. '));
            });
            it('passes in the default image link if book has no thumbnail', () => {
                expect(component.find(Book).prop('avatar')).to.equal(DEFAULT_IMG);
            });
        });
    });
});