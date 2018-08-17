// export class Api{
//     constructor(){
//         //super(props);
//         this.getApiMessage = this.getApiMessage.bind(this);
//     }

//     getApiMessage(value) {
//         return new Promise((resolve, reject) => {
//             setTimeout(function() {
//                 value === '' ? reject('error') : resolve('success');
//             }, 2000);
//         });
//     }
// }

export function getApiMessage(value) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            value === ''||value ===undefined ? reject('error') : resolve('success');
        }, 2000);
    });
  }