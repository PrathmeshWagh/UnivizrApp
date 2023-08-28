import { View, FlatList, StyleSheet } from 'react-native'
import { ClosedData } from "../ScheduleScreenData/ScheduleData";
import ScheduleRenderData from './ScheduleRenderData';

function ClosedSchedule({ onPress }) {
  const renderItemHandler = ({ item }) => {
    return <ScheduleRenderData item={item} onPress={onPress} />
  }

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={ClosedData}
        keyExtractor={(UpcomingData) => UpcomingData.id.toString()}
        renderItem={renderItemHandler}
      />
    </View>

  )

}
export default ClosedSchedule;
const styles = StyleSheet.create({

})