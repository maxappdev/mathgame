class Equation{
    constructor(firstNumber, operations){
        this.firstNumber = firstNumber
        this.operations = operations
    }

    print(){
        let result = this.firstNumber
        this.operations.forEach(operation => {
           result += operation.operationMethod + operation.number
        });

        return result
    }

}
export default Equation