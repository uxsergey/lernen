'use strict';
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(num, basis = 2) {
    console.log(num * basis);

}

calcOrDouble(3);