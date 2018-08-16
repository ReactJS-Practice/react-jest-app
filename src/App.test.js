import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('on change of input field should call handleChange', () => {
  const spy = jest.spyOn(App.prototype, 'handleChange');
  const wrapper = shallow(<App />);
  const buttonElement = wrapper.find('#input');
  buttonElement.simulate('change', {target: {value: 'matched'} });
  expect(spy).toHaveBeenCalledTimes(1);
});

it('on change of input field should call handleChange and update state', () => {
  const spy = jest.spyOn(App.prototype, 'handleChange');
  const wrapper = shallow(<App />);
  const buttonElement = wrapper.find('#input');
  buttonElement.simulate('change', {target: {value: 'matched'} });
  expect(wrapper.state().inputvalue).toEqual('matched');
});

it('on change of input field should call handleChange and update state', () => {
  const spy = jest.spyOn(App.prototype, 'handleChange');
  const wrapper = shallow(<App />);
  const buttonElement = wrapper.find('#input');
  buttonElement.simulate('change');
  expect(wrapper.state().inputvalue).toEqual('');
});
it('on change of input field should call getApiMessage', () => {
  const spy = jest.spyOn(App.prototype, 'getApiMessage');
  const wrapper = shallow(<App />);
  const buttonElement = wrapper.find('#button');
  buttonElement.simulate('click');
  expect(spy).toHaveBeenCalledTimes(1);
});

it('on change of input field should call handleChange and update state', () => {
  const handlechangespy = jest.spyOn(App.prototype, 'handleChange');
  const getApiMessagespy = jest.spyOn(App.prototype, 'getApiMessage');
  const wrapper = shallow(<App />);
  const inputElement = wrapper.find('#input');
  inputElement.simulate('change', {target: {value: 'matched'} });

  const buttonElement = wrapper.find('#button');
  buttonElement.simulate('click');

  expect(wrapper.state().inputvalue).toEqual('matched');
});

it('on change of input field should call handleChange and update state', () => {
  const getApiMessagespy = jest.spyOn(App.prototype, 'getApiMessage');
  const wrapper = shallow(<App />);

  const buttonElement = wrapper.find('#button');
  buttonElement.simulate('click');

  expect(wrapper.state().inputvalue).toEqual('');
});