const object1 = {
    name: 'Boris',
    weight: 15
};

const object2 = {
    name: 'Boris',
    weight: 15
};

const object3 = {
    name: 'Rex',
    weight: 20,
};



// Реализуйте функцию isEquivalent

function isEquivalent(object1, object2) {
    return JSON.stringify(object1)===JSON.stringify(object2);
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false