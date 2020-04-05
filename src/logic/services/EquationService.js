export const solveEquation = (equation) => {
    const equationString = toString(equation)
    var result = eval(equationString)
    return result
}

export const isValid = (equation) => {
    let answer = solveEquation(equation);
    return (answer > 0) && (answer%1 == 0);
}

function toString(equation){
    let result = equation.print().replace('×', '*').split("×").join("*");
    result = result.split("÷").join("/");
    return result
}

