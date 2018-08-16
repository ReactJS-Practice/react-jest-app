import React from 'react';
import ReactDOM from 'react-dom';
import {getApiMessage} from './api';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
    const inputvalue = 'asdfasd'
    jest.spyOn('getApiMessage').and.returnValue(Promise.resolve(promisedData));
    getApiMessage(inputvalue).then(result=>{
        expect(getApiMessage).toHaveBeenCalledWith(inputvalue);
    });
});
// export function getApiMessage(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             value === '' ? reject('error') : resolve('success');
//         }, 2000);
//     });
//   }