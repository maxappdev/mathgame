import Equation from '../models/Equation'
import {isValid} from '../services/EquationService'
import Level from '../models/Level'

export const generateEquation = (levelNr) => {
    let operations = []
    const level = Level.levelNumber[levelNr]

    for(i = 0; i < level.operationsSize; i++){
        operations = [...operations, {
            operationMethod: generateOperationMethod(level.availableOperationMethods),
            number: generateNumberFromTo(level.minNumber,level.maxNumber)
        }]
    }

    const equation = new Equation(generateNumberFromTo(level.minNumber,level.maxNumber), operations)
    return (isValid(equation)) ? equation : generateEquation(levelNr)
}

function generateNumberFromTo(startNumber, finalNumber){
        return Math.floor(Math.random() * (finalNumber-startNumber+1) + startNumber);
}

function generateOperationMethod(operationsArray){
    return operationsArray[generateNumberFromTo(0,operationsArray.length-1)]
}