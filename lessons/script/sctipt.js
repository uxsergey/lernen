'use strict';

const persone = {
    name: 'Alex',
    tel: '+777333222',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
//Глубокое клонироване
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.dad = "Dick";
clone.parents.mom = "Cunt";
console.log(persone);
console.log(clone);