// Реализуйте функцию sum

function sum(){
    let result = 0;
    var call = [5, 5, 5, 5, 5, 5, 5, 5, 5];
    for(let i = 0; i < call.length; i++){
        result += call[i];
    }
    return result;
}

console.log(sum());