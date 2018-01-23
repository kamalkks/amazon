'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    let one = Number(event.one);
    let two = Number(event.two);
    let total=one+two;
    callback(null, total); 
};
