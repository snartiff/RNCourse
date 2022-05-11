import { StyleSheet,Text, View, Pressable } from 'react-native';

function GoalItem(props) { 
    return(
        //Note this syntax can be used instead of invoking the parent function as in GoalInput.js
        <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.goalItemContainer}>
                <Text style={styles.goalItem}>{props.goal.text}</Text>
            </View>
        </Pressable>
    );      
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItemContainer: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: 'black'
      },
      goalItem: { 
        color: 'white'
      }    
})