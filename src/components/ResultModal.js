import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import styles from '../styles/ResultModalStyles'

const ResultModal = (props) => {
    return (
    <>
    <Modal transparent={false} visible={props.isVisible} animationType="slide">
        <View style={styles.modalView}>
            <View>
            <Text>Your result: {props.points} POINTS</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="NEW GAME" onPress={props.newGame} />
                <Button title="TO MENU" onPress={props.backToMenu}/>
            </View>
            <View style={styles.buttonContinueContainer}>
                <Button title="CONTINUE GAME (SEE ADD)" onPress={props.continueGame} />
            </View>
        </View>
    </Modal>
    </>
    );
}
export default ResultModal