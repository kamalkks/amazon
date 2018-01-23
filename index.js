'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    let one = Number(event.one);
    let two = Number(event.two);
    let total=one+two;
    callback(null, total); 
};

//link url
// https://27yxp6kwzl.execute-api.us-west-2.amazonaws.com/test/gur/?one=1&two=3
