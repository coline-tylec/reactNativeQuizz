import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import data from '../questions'
import Next from './Next'

export default function Question() {

    const [step, setStep] = useState(0)
    const [score, setScore ] = useState(0)
    const [ testOver, setTestOver ] = useState(false)

    
    const verifyAnswer = (value) => {
        if (step < data.length - 1) {
            //Attention, la ligne ci-dessous est asynchrone(mis de côté) et sera exécutée quand il aura fini la fonction dans laquelle il est
            setStep(step + 1)
            console.log(step)
            if (data[step].value === verifyAnswer(value)) {
                setScore(score + 1)
                console.log("Score dans le game : " + score)
            } else {
                setScore(score - 1)
                console.log("Score dans le game : " + score)
            }
        } else {
            setTestOver(true)
            console.log(testOver)
            // score = score;
            // console.log("Score final : " + score)
        }
    }

    if(testOver === true) {
        return (
            <View>
                <Text>
                    Le test est terminé, voici ton score :
                </Text>
            </View>
        )
    } else {
        return (
            <View>
                <Text>Question {data[step].id}</Text>
                <Text>{data[step].question}</Text>
                <Button
                    title="VRAI"
                    onPress={() => verifyAnswer(true)}></Button>
                <Button
                    title="FAUX"
                    onPress={() => verifyAnswer(false)}></Button>
            </View>
        )
    }
}