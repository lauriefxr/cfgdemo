// // Homework
// // sum
function calculatorSum(x,y) {
    return x+y;
}
var resultSum = calculatorSum(5,6);
console.log(resultSum);

// // subtract
function calculatorSubtract(x,y) {
    return x-y;
}
var resultSubtract = calculatorSubtract(10,6);
console.log(resultSubtract);


// // divide
function calculatorDivide(x,y) {
    return x/y;
}
var resultDivide = calculatorDivide(5,6);
console.log(resultDivide);

// // multiply
function calculatorMultiply(x,y) {
    return x*y;
}
var resultMultiply = calculatorMultiply(4,8);
console.log(resultMultiply);


// // power
function calculatorPower(x,y) {
    return x**y;
}
var resultPower = calculatorPower(2,6);
console.log(resultPower);


// // square root
function calculatorSquareRoot(x) {
    return x**(1/2);
}
var resultSquareRoot = calculatorSquareRoot(4);
console.log(resultSquareRoot)


// // extended Homework
// // sum
function calculatorSum1(x,y) {
    var operatorSum = x+y;
    var string1 = x;
    var string2 = y;
    var resultSum = prompt(`Please enter your answer: ${string1} + ${string2} =`);
    if (resultSum == operatorSum) {
        return alert('Your answer is correct!');
    } else {
        return alert (`Sorry, the answer is ${operatorSum}`)
    }
}

var Sum = calculatorSum1(10,6);

// // subtract
function calculatorSubtract1(x,y) {
    var operatorSubtract = x-y;
    var string1 = x;
    var string2 = y;
    var resultSubtract = prompt(`Please enter your answer: ${string1} - ${string2} =`);
    if (resultSubtract == operatorSubtract) {
        return alert('Your answer is correct!');
    } else {
        return alert (`Sorry, the answer is ${operatorSubtract}`)
    }
}

var Subtract = calculatorSubtract1(10,6);

// // divide
function calculatorDivide1(x,y) {
    var operatorDivide = x/y;
    var string1 = x;
    var string2 = y;
    var resultDivide = prompt(`Please enter your answer: ${string1} / ${string2} =`);
    if (resultDivide == operatorDivide) {
        return alert('Your answer is correct!');
    } else {
        return alert (`Sorry, the answer is ${operatorDivide}`)
    }
}

var Divide = calculatorDivide1(10,5);

// // multiply
function calculatorMultiply1(x,y) {
    var operatorMultiply = x*y;
    var string1 = x;
    var string2 = y;
    var resultMultiply = prompt(`Please enter your answer: ${string1} * ${string2} =`);
    if (resultMultiply == operatorMultiply) {
        return alert('Your answer is correct!');
    } else {
        return alert (`Sorry, the answer is ${operatorMultiply}`)
    }
}

var Multiply = calculatorMultiply1(8,6);

// // power
function calculatorPower1(x,y) {
    var operatorPower = x**y;
    var string1 = x;
    var string2 = y;
    var resultPower = prompt(`Please enter your answer: ${string1} ** ${string2} =`);
    if (resultPower == operatorPower) {
        return alert('Your answer is correct!');
    } else {
        return alert (`Sorry, the answer is ${operatorPower}`)
    }
}

var Power = calculatorPower1(2,6);


// // square root
function calculatorSquareRoot1(x) {
    var operatorSquareRoot = x**(1/2);
    var string1 = x;
    var resultSquareRoot = prompt(`Please enter your answer: square root of ${string1} =`);
    if (resultSquareRoot == operatorSquareRoot) {
        return alert('Your answer is correct!');
    } else {
        return alert (`Sorry, the answer is ${operatorSquareRoot}`)
    }
}

var SquareRoot = calculatorSquareRoot1(64);