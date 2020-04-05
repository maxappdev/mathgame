import operationMethod from './OperationMethod'

const allAvailableOpMethods = [
    operationMethod.ADDITION, 
    operationMethod.SUBSTITUTION, 
    operationMethod.MULTIPLICATION, 
    operationMethod.DIVISION
];
const additionSubstitutionMethods = [
    operationMethod.ADDITION, 
    operationMethod.SUBSTITUTION, 
]

const multiplicationDivisionMethods = [
    operationMethod.MULTIPLICATION, 
    operationMethod.DIVISION, 
]

const Level = {
    levelNumber : {
        1: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 1,
            duration: 7
        },
        2: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: multiplicationDivisionMethods,
            operationsSize: 1,
            duration: 7
        },
        3: {
            minNumber: 5,
            maxNumber: 10,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 1,
            duration: 5
        },
        4: {
            minNumber: 5,
            maxNumber: 10,
            availableOperationMethods: multiplicationDivisionMethods,
            operationsSize: 1,
            duration: 5
        },
        5: {
            minNumber: 5,
            maxNumber: 10,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 1,
            duration: 4
        },
        6: {
            minNumber: 5,
            maxNumber: 10,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 1,
            duration: 4
        },
        7: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 2,
            duration: 7
        },
        8: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 2,
            duration: 5
        },
        9: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 2,
            duration: 5
        },
        10: {
            minNumber: 5,
            maxNumber: 10,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 2,
            duration: 5
        },
        11: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 3,
            duration: 10
        },
        12: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 3,
            duration: 8
        },
        13: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: additionSubstitutionMethods,
            operationsSize: 3,
            duration: 5
        },
        14: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 3,
            duration: 10
        },
        15: {
            minNumber: 1,
            maxNumber: 10,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 3,
            duration: 5
        },
        16: {
            minNumber: 5,
            maxNumber: 10,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 3,
            duration: 10
        },
        17: {
            minNumber: 6,
            maxNumber: 11,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 3,
            duration: 9
        },
        18: {
            minNumber: 7,
            maxNumber: 12,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 3,
            duration: 9
        },
        19: {
            minNumber: 8,
            maxNumber: 13,
            availableOperationMethods: allAvailableOpMethods,
            operationsSize: 3,
            duration: 10
        },
    }
}

export const maxLevelNr = Object.keys(Level.levelNumber).length;

export default Level