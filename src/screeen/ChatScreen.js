import { View, Text, StyleSheet, Image, FlatList, Pressable } from "react-native";
// This AdvisorDatas Is of ConsultWith Advisor Data 
import { chatData } from "../components/ChatScreenData/ChatScreenData";

function ChatScreen({ navigation }) {


  function renderChat({ item }) {

    return (
      <>
        <Pressable style={styles.infoContainer} onPress={() => navigation.navigate('AdvisorChat', { selectedPerson: item })}>
          <View style={styles.imageAndName}>
            <Image source={item.image} style={styles.imageBox} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
              <Text>{item.message}</Text>
            </View>
          </View>

          <Text style={styles.TimeContainer} >{item.time}</Text>

        </Pressable >
        <View style={{ borderBottomWidth: 0.5 }} />
      </>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtracter={(item) => item.id}
        renderItem={renderChat}
      />
    </View>

  )
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20
  },
  imageAndName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageBox: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  TimeContainer: {
    alignSelf: 'center',
    color: '#6B0554',
    fontWeight: 'bold'
  }
})