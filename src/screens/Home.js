import React from 'react'
import { 
    View, 
    Button } from 'react-native'
import styles from '../styles/HomeStyles'


const Home = (props) => {
    return (
        <>
            <View style={styles.container}>
            <Button title="Play" onPress={() => props.navigation.navigate('Game')} />
            </View>
        </>
    );
}
export default Home