import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.js';
import React from 'react';
import ReactDOM from 'react-dom';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
