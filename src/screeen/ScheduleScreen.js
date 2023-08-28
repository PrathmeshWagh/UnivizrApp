import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import UpcomingSchedule from "../components/ScheduleScreen/UpcomingSchedule";
import ClosedSchedule from "../components/ScheduleScreen/ClosedSchedule";
import AllSchedule from "../components/ScheduleScreen/AllSchedule";

function ScheduleScreen({ navigation }) {
  const [isPressed, setIsPressed] = useState('Upcoming')

  function UpcomingpressHandler(item) {
    navigation.navigate('ScheduleDetail', { SelectedItem: item })
  }

  function ClosedpressHandler() {

  }
  function AllpressHandler() {

  }

  return (
    <View style={styles.Parentcontainer}>
      <View style={styles.scheduleBtnContainer}>
        <Pressable onPress={() => setIsPressed('Upcoming')} style={[styles.btnInnerContainer, isPressed === 'Upcoming' && styles.btnBackground]}>
          <Text style={[styles.scheduleBtnText, isPressed === 'Upcoming' && styles.btnText]}>Upcoming</Text>
        </Pressable>

        <Pressable onPress={() => setIsPressed('Closed')} style={[styles.btnInnerContainer, isPressed === 'Closed' && styles.btnBackground]}>
          <Text style={[styles.scheduleBtnText, isPressed === 'Closed' && styles.btnText]}>Closed</Text>
        </Pressable>

        <Pressable onPress={() => setIsPressed('All')} style={[styles.btnInnerContainer, isPressed === 'All' && styles.btnBackground]}>
          <Text style={[styles.scheduleBtnText, isPressed === 'All' && styles.btnText]}>All</Text>
        </Pressable>
      </View>

      <View style={styles.listContainer}>
        {isPressed === 'Upcoming' && <UpcomingSchedule onPress={UpcomingpressHandler} />}
        {isPressed === 'Closed' && <ClosedSchedule onPress={ClosedpressHandler} />}
        {isPressed === 'All' && <AllSchedule onPress={AllpressHandler} />}
      </View>
    </View>
  )
}

export default ScheduleScreen;

const styles = StyleSheet.create({
  Parentcontainer: {
    flex: 1
  },
  scheduleBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    backgroundColor: '#E8E8E8',
    borderRadius: 4,
    marginHorizontal: 15,
  },
  btnInnerContainer: {
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    width: '31%'
  },
  scheduleBtnText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  btnBackground: {
    backgroundColor: '#6B0554',
  },
  btnText: {
    color: 'white'
  },
  listContainer: {

  }
})