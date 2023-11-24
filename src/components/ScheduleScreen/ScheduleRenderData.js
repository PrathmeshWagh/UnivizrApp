import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import IconButton from "../UI/IconButton";


export default function ScheduleRenderData({ item, onPress }) {

  return (
    <View style={styles.parentContainer}>
      <Pressable onPress={() => onPress(item)} style={styles.dataContainer}  >
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <View>
            <Image source={item.image} style={styles.imageContainer} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.nametext}>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
        </View>

        <View>
          <Text style={[item.status === 'Pending' &&
            styles.statusColorPendi,
          item.status === 'Confirmed' &&
          styles.statusColorConf,
          item.status === 'Cancelled' &&
          styles.statusColorCancelled,]}>{item.status}
          </Text>

          <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
            <IconButton icon={'greater-than'} size={20} color={'gray'} />
          </View>
        </View>
      </Pressable>
      <View style={{ borderBottomWidth: 4, borderColor: '#E8E8E8' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  dataContainer: {
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  infoContainer: {
    marginLeft: 8
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black'
  },
  nametext: {
    color: 'black'
  },
  statusColorConf: {
    color: 'green'
  },
  statusColorPendi: {
    color: 'orange'
  },
  statusColorCancelled: {
    color: 'red'
  }
})