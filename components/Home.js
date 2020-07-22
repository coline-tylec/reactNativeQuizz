import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import Game from './Game'

export default function Home(props) {

    return (
        <View>
            <Text>The Awesome Quizz</Text>
            <Button
                title="Play"
                onPress={props.game}></Button>
        </View>
    )
}