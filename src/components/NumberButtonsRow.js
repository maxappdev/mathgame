import React from 'react';
import { View, Button } from "react-native"
import numberButtonsStyles from '../styles/NumberButtonsStyles'

const NumberButtonsRow = (props) => {

    const buttonsStyles = numberButtonsStyles

    return (
        <>
            <View style={buttonsStyles.buttonsRow}>
                {
                    props.buttonNames.map(number => {
                        return (
                            <View key={number + '.key'} style={buttonsStyles.buttonContainer}>
                            <Button key={number} style={buttonsStyles.button} onPress={() => props.handleButtonPress(number)} title={number} />
                            </View>
                        )
                    })
                }
            </View>
        </>
    );
};
export default NumberButtonsRow