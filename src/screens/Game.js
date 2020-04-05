import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  useState,
  useEffect,
} from 'react'
import NumberButtons from '../components/NumberButtons'
import {useInterval} from '../logic/services/TimerService'
import {generateEquation} from '../logic/factories/EquationFactory'
import {solveEquation} from '../logic/services/EquationService'
import appStyles from '../styles/AppStyles'
import ResultModal from '../components/ResultModal'
import Level from '../logic/models/Level';
import {pageMountedFirstTime} from '../logic/services/PageRenderService'
import { maxLevelNr } from '../../src/logic/models/Level'

const Game = (props) => {

  const timerDelayInMs = 1000
  const timerDelayInSec = timerDelayInMs/1000
  const maxAnswerLength = 10
  const nextLevelAfter = 5
  const mountedFirstTime = pageMountedFirstTime();

  const [points, setPoints] = useState(0) 
  const [levelNr, setLevelNr] = useState(1)
  const [timerDurationInSec, setTimerDuration] = useState(Level.levelNumber[levelNr].duration)
  const [equation, setEquation] = useState(generateEquation(levelNr))
  const [answer, setAnswer] = useState("")
  const [timeoutVal, setTimeoutVal] = useState(timerDurationInSec)
  const [timerRunning, setTimerRunning] = useState(true)
  const [resultModalVisible, setResultModalVisible] = useState(false)

  useInterval(() => {
    setTimeoutVal(timeoutVal - timerDelayInSec);
    if(timeoutVal == 0){
      gameLost()
    }
  }, timerRunning ? timerDelayInMs : null);

  useEffect(() => {
    if (!mountedFirstTime) {
      checkAnswer()
    }
  },[answer]);

  useEffect(() => {
    if (!mountedFirstTime) {
      checkPoints()
    }
  },[points]);

  useEffect(() => {
    if (!mountedFirstTime) {
      setEquation(generateEquation(levelNr))
    }
  },[levelNr]);

  useEffect(() => {
    if (!mountedFirstTime) {
      const levelDuration = Level.levelNumber[levelNr].duration
      setTimerDuration(levelDuration)
      setTimeoutVal(levelDuration)
    }
  },[equation]);

  const checkAnswer = () => {
    if(answer != "" && answer == solveEquation(equation)){
      setAnswer("")
      setPoints(points+1)
    }
  }

  const checkPoints = () => {
    if(points == 0){
      setLevelNr(1)
    }
    else if(points != 0 && points%nextLevelAfter == 0 && ((levelNr+1) <= maxLevelNr ) ){
      setLevelNr(levelNr+1)
    }
    else{
      setEquation(generateEquation(levelNr))
    }
  }
  
  const gameLost = () => {
    setTimerRunning(false)
    setResultModalVisible(true)
  }

  const backToMenu = () => {props.navigation.navigate('Home')}

  const newGame = () => {
    setPoints(0)
    setAnswer("")
    setTimerRunning(true)
    setResultModalVisible(false)
  }

  const continueGame = () => {
    setEquation(generateEquation(levelNr))
    setAnswer("")
    setTimerRunning(true)
    setResultModalVisible(false)
  }

  const addToAnswer = (symbol) => {
    if( (answer.length < maxAnswerLength) || (symbol == "C") ){
      (symbol == "C") ? setAnswer("") : setAnswer(answer + symbol)
    }
  }
  
  return (
    <>
      <View>
        <ResultModal backToMenu={backToMenu} continueGame={continueGame} newGame={newGame} points={points} isVisible={resultModalVisible}></ResultModal>
        <View style={
        {
          width: timeoutVal*(100/timerDurationInSec)+'%',
          height: 30,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }
        }>
        </View>
        <View style={appStyles.infoTextView}>
          <Text>POINTS: {points} ; LEVEL: {levelNr}</Text>
        </View>
        <View id="equation-view" style={appStyles.equationView}>
        <Text id="equation" style= {appStyles.equation}>{equation.print()}</Text>
        </View>
        <View id="answer-view" style={appStyles.answerView}>
          <Text id="answer">{answer}</Text>
        </View>
        <NumberButtons handleButtonPress={addToAnswer}></NumberButtons>
      </View>
    </>
  );
};

export default Game;