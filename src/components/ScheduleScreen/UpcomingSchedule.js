import { Text, View, StyleSheet, FlatList, Image, Pressable } from "react-native";
import { UpcomingDatas } from '../ScheduleScreenData/ScheduleData';
import ScheduleRenderData from "./ScheduleRenderData";


function UpcomingSchedule({ onPress }) {

  const renderItemHandler = ({ item }) => {
    return <ScheduleRenderData item={item} onPress={onPress} />
  }

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={UpcomingDatas}
        keyExtractor={(UpcomingData) => UpcomingData.id.toString()}
        renderItem={renderItemHandler}
      />
    </View>

  )

}
export default UpcomingSchedule;
const styles = StyleSheet.create({

})
