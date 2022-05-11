import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
   const[courseGoals, setCourseGoals] = useState([])

    function addGoalHandler(enteredGoalText){
        //Works, but not recommended for situations where we depend on the previous state
        // setCourseGoals([...courseGoals], enteredGoalText)
        //recommended syntax - pass in a function that is called automatically
        setCourseGoals((currentCourseGoals) => 
        [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}
        ]);
    }
    function deleteGoalHandler(id){
      setCourseGoals(currentCourseGoals => {
        //where 'key' is an id
        return currentCourseGoals.filter((goal) => goal.key !== id );
      })
      console.log('delete')
    }     
  return (
    <View style={styles.container}>
       <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
      {/* <ScrollView>
          {courseGoals.map((goal, index) =>
          <View key={index} style={styles.goalItemContainer}>
            <Text style={styles.goalItem}>{goal}</Text>
          </View> 
          )}
        </ScrollView>         */}
        <FlatList data={courseGoals} renderItem={items => {
          return <GoalItem goal={items.item} onDeleteGoal={deleteGoalHandler} id={items.item.key} />
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1
  },
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
  },
  goalsContainer: {
    flex: 5
  }
});
