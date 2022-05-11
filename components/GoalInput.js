import { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
import {StyleSheet} from 'react-native';

function GoalInput(props){  
    const[enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>        
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 24,
        borderBottomColor: 'grey'
      },
      textInput: {
        borderWidth: 1,
        width: '70%',
        marginRight: 8,
        padding: 8
      }
}) 