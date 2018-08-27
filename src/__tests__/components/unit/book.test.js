import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import { expect } from 'chai';
import { Book } from "../../../components/book";
import { mount } from "enzyme";


describe('Book', () => {
    let props;
    let component;
    beforeEach(() => {
        props = {
            id: 'id',
            title: 'Snow Crash',
            avatar: 'https://en.wikipedia.org/wiki/Snow_Crash#/media/File:Snowcrash.jpg',
            author: 'Neal Stephenson',
            published: 'June 1992',
            description: 'In twenty-first-century America, a teenaged computer hacker finds himself fighting a computer virus that battles virtual reality technology and a deadly drug that turns humans into zombies',
            categories: ['Science Fiction']
        };
        component = mount( <Book {...props} />);
    });
    describe('receives a prop object', () => {
        it('always renders a div', () => {
            expect(component.find("div").findWhere((item) => {
                    return item.hasClass('book')
            })).to.have.lengthOf(1);
        });

        it('renders the correct thumbnail', () => {
            const img = component.find("img");
            expect(img.exists()).eql(true);
            expect(img.filterWhere((item) => {
                    return item.prop('src') === props.avatar;
            })).to.have.lengthOf(1);
        });

        it('renders the correct book title', () => {
            expect(component.find('h4').text()).to.eql(props.title);
        });

        it('renders the correct book author', () => {
            expect(component.find('p').at(0).text()).includes(props.author);
        });

        it('renders the correct description', () => {
            expect(component.find('span').at(1).text()).to.eql(props.description);
        });

        it('renders the correct category', () => {
            expect(component.find('span').at(2).text()).to.eql(props.categories[0]);
        });
    });

    describe('author not provided', () => {
        let innerProps;
        beforeEach(() => {
            innerProps = {...props};
            innerProps.author = null;
            component = mount( <Book {...innerProps} />);
        })
        it('renders n/a as the author name', () => {
            expect(component.find('p').at(0).text()).includes('n/a');
        });
    });

    describe('no category provided', () => {
        let innerProps;
        beforeEach(() => {
            innerProps = {...props};
            innerProps.categories = null;
            component = mount( <Book {...innerProps} />);
        })
        it('renders n/a as the category', () => {
            expect(component.find('span').at(2).text()).to.eql('n/a');
        });
    })

});
