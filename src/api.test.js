import React from 'react';
import ReactDOM from 'react-dom';
import {getApiMessage} from './api';
import {shallow} from 'enzyme';

it('call api with undefined', () => {
    return getApiMessage().catch((data) => {
        expect(data).toBe('error');
    });
});

it('call api with empty string', () => {
    return getApiMessage('').catch((data) => {
        expect(data).toBe('error');
    });
});
it('call api with data string', () => {
    return getApiMessage('somerandom').then((data) => {
        expect(data).toBe('success');
    });
});
// export function getApiMessage(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             value === '' ? reject('error') : resolve('success');
//         }, 2000);
//     });
//   }