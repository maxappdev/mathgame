import 'react-native';
import { maxLevelNr } from '../../src/logic/models/Level'
import { generateEquation } from '../../src/logic/factories/EquationFactory'
import { solveEquation, isValid } from '../../src/logic/services/EquationService';
import Equation from '../../src/logic/models/Equation';
import operationMethod from '../../src/logic/models/OperationMethod';

//Generating some random valid equations
const eq_2_plus_3 = new Equation(2, [{operationMethod: operationMethod.ADDITION, number: 3}])
const eq_8_plus_3_mul_2 = new Equation(8, [{operationMethod: operationMethod.ADDITION, number: 3}, {operationMethod: operationMethod.MULTIPLICATION, number: 2}])
const eq_4_plus_6_mul_3_mul_4 = new Equation(4, [{operationMethod: operationMethod.ADDITION, number: 6}, {operationMethod: operationMethod.MULTIPLICATION, number: 3}, {operationMethod: operationMethod.MULTIPLICATION, number: 4}])
const eq_8_min_3 = new Equation(8, [{operationMethod: operationMethod.SUBSTITUTION, number: 3}])
const eq_6_mul_2_div_3 = new Equation(6, [{operationMethod: operationMethod.MULTIPLICATION, number: 2}, {operationMethod: operationMethod.DIVISION, number: 3}])
const eq_1_plus_5_plus_9 = new Equation(1, [{operationMethod: operationMethod.ADDITION, number: 5}, {operationMethod: operationMethod.ADDITION, number: 9}])
const eq_10_min_1_plus_5_mul_9 = new Equation(10, [{operationMethod: operationMethod.SUBSTITUTION, number: 1}, {operationMethod: operationMethod.ADDITION, number: 5}, {operationMethod: operationMethod.MULTIPLICATION, number: 9}])

//Generating some random unvalid equations
const eq_2_minus_3 = new Equation(2, [{operationMethod: operationMethod.SUBSTITUTION, number: 3}])
const eq_8_minus_3_div_2 = new Equation(8, [{operationMethod: operationMethod.SUBSTITUTION, number: 3}, {operationMethod: operationMethod.DIVISION, number: 2}])
const eq_4_min_6_div_3_div_4 = new Equation(4, [{operationMethod: operationMethod.SUBSTITUTION, number: 6}, {operationMethod: operationMethod.DIVISION, number: 3}, {operationMethod: operationMethod.DIVISION, number: 4}])
const eq_8_div_3 = new Equation(8, [{operationMethod: operationMethod.DIVISION, number: 3}])
const eq_6_div_2_div_4 = new Equation(6, [{operationMethod: operationMethod.DIVISION, number: 2}, {operationMethod: operationMethod.DIVISION, number: 4}])
const eq_1_minus_5_minus_9 = new Equation(1, [{operationMethod: operationMethod.SUBSTITUTION, number: 5}, {operationMethod: operationMethod.SUBSTITUTION, number: 9}])
const eq_10_min_1_min_1_mul_9 = new Equation(10, [{operationMethod: operationMethod.SUBSTITUTION, number: 1}, {operationMethod: operationMethod.SUBSTITUTION, number: 1}, {operationMethod: operationMethod.MULTIPLICATION, number: 9}])

//Generating array [1...maxLevelNr]
const array_1_to_maxLevelNr = [...Array(maxLevelNr+1).keys()].slice(1)

describe('App logic', () => {

  it('detects maxLevelNr correctly', () => {
    expect(maxLevelNr).toBe(19)
  })

  it('can solve 2 equations of each level', () => {
    array_1_to_maxLevelNr.forEach( e => {
          const equation1 = generateEquation(e)
          const answer1 = solveEquation(equation1)
          const equation2 = generateEquation(e)
          const answer2 = solveEquation(equation2)
          expect(answer1).toEqual(expect.any(Number));  
          expect(answer2).toEqual(expect.any(Number));  
    })
  })

  it('solves equations correctly', () => {
    expect(solveEquation(eq_2_plus_3)).toBe(5)
    expect(solveEquation(eq_8_plus_3_mul_2)).toBe(14)
    expect(solveEquation(eq_4_plus_6_mul_3_mul_4)).toBe(76)
    expect(solveEquation(eq_8_min_3)).toBe(5)
    expect(solveEquation(eq_6_mul_2_div_3)).toBe(4)
    expect(solveEquation(eq_1_plus_5_plus_9)).toBe(15)
    expect(solveEquation(eq_10_min_1_plus_5_mul_9)).toBe(54)
  })

  it('detects unvalid equations correctly', () => {
    expect(isValid(eq_2_plus_3)).toBe(true)
    expect(isValid(eq_8_plus_3_mul_2)).toBe(true)
    expect(isValid(eq_4_plus_6_mul_3_mul_4)).toBe(true)
    expect(isValid(eq_8_min_3)).toBe(true)
    expect(isValid(eq_6_mul_2_div_3)).toBe(true)
    expect(isValid(eq_1_plus_5_plus_9)).toBe(true)
    expect(isValid(eq_10_min_1_plus_5_mul_9)).toBe(true)

    expect(isValid(eq_2_minus_3)).toBe(false)
    expect(isValid(eq_8_minus_3_div_2)).toBe(false)
    expect(isValid(eq_4_min_6_div_3_div_4)).toBe(false)
    expect(isValid(eq_8_div_3)).toBe(false)
    expect(isValid(eq_6_div_2_div_4)).toBe(false)
    expect(isValid(eq_1_minus_5_minus_9)).toBe(false)
    expect(isValid(eq_10_min_1_min_1_mul_9)).toBe(false)

  })

  it('generates equations correctly', () => {
    array_1_to_maxLevelNr.forEach(e => {
      const equation = generateEquation(e)
      expect(equation).toBeInstanceOf(Equation)
    }) 
  })

  it('prints equations correctly', () => {
    expect(eq_2_plus_3.print()).toBe("2 + 3")
    expect(eq_8_plus_3_mul_2.print()).toBe("8 + 3 × 2")
    expect(eq_4_plus_6_mul_3_mul_4.print()).toBe("4 + 6 × 3 × 4")
    expect(eq_8_min_3.print()).toBe("8 - 3")
    expect(eq_6_mul_2_div_3.print()).toBe("6 × 2 ÷ 3")
    expect(eq_1_plus_5_plus_9.print()).toBe("1 + 5 + 9")
    expect(eq_10_min_1_plus_5_mul_9.print()).toBe("10 - 1 + 5 × 9")
  })

});