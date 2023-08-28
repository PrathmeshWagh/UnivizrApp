import { View, FlatList, StyleSheet } from "react-native";
import { AllData } from "../ScheduleScreenData/ScheduleData";
import ScheduleRenderData from "./ScheduleRenderData";

function AllSchedule({ onPress }) {
  const renderItemHandler = ({ item }) => {
    return <ScheduleRenderData item={item} onPress={onPress} />

  }

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={AllData}
        keyExtractor={(UpcomingData) => UpcomingData.id.toString()}
        renderItem={renderItemHandler}
      />
    </View>

  )

}
export default AllSchedule;
const styles = StyleSheet.create({

})