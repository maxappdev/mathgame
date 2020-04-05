import React from 'react';
import { View} from "react-native"
import NumberButtonsRow from './NumberButtonsRow'

const NumberButtons = (props) => {
    return (
        <>
        <View>
            <NumberButtonsRow handleButtonPress={props.handleButtonPress} buttonNames={["1","2","3"]}></NumberButtonsRow>
            <NumberButtonsRow handleButtonPress={props.handleButtonPress} buttonNames={["4","5","6"]}></NumberButtonsRow>
            <NumberButtonsRow handleButtonPress={props.handleButtonPress} buttonNames={["7","8","9"]}></NumberButtonsRow>
            <NumberButtonsRow handleButtonPress={props.handleButtonPress} buttonNames={["00","0","C"]}></NumberButtonsRow>
        </View>
        </>
    );
};
export default NumberButtons