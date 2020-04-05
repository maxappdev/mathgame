import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ResultModal from '../../src/components/ResultModal';
import NumberButtons from '../../src/components/NumberButtons';
import { shallow } from 'enzyme';
import Game from '../../src/screens/Game';

describe('Game Screen', () => {
  it('renders Modal correctly', () => {
    const wrapper = renderer.create(<ResultModal />).toJSON()
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Buttons Row correctly', () => {
    const wrapper = renderer.create(<NumberButtons />).toJSON()
    expect(wrapper).toMatchSnapshot();
  });

  it('contains equation', () => {
      const wrapper = shallow(<Game />)
      const equation = wrapper.find('View').find('#equation-view').find('#equation').render().text()
      expect(equation).toEqual(expect.any(String));  
  })

})

//TODO: write this method. it does not work and will be really difficult to write
/*
const userPlaysGameAndEarns100Points = () => {
    let gameScreen = shallow(<Game />) -> enzyme shallow method
    let equation = gameScreen.find('View').find('#equation-view').find('#equation').render().text()
    console.log(equation)
    let usersAnswer = getAnswer(equation){
        const getAnswer = (equationString) => {
    const properString = equationString.split("×").join("*").split("÷").join("/")
    return eval(properString)
}
    }
     //TODO: now i just hardcode input. I should simulate pressing on real buttons
    const inputAnswer = gameScreen.find('View').find('NumberButtons').props().handleButtonPress
    inputAnswer(inputAnswer)
    shallow(gameScreen.find('#equation-view').find('#equation')).update()
    gameScreen = shallow(<Game />)
    equation = gameScreen.find('View').find('#equation-view').find('#equation').render().text()
    console.log(equation)
}
*/

//TODO: make it ready
/*describe('User on Game Screen', () => {
    it('can play game and earn 100 points', () => {
        userPlaysGameAndEarns100Points()
    })
})*/