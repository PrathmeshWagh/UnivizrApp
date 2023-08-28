import { Text, View, StyleSheet, FlatList, Image } from "react-native"

const SearchAdvisorData = [
  {
    id: 1,
    name: 'Alisha Johnson',
    jobRole: 'University Professor',
    image: require('../../assest/Alisha.jpeg')
  },
  {
    id: 2,
    name: 'John Moody',
    jobRole: 'Science Faculty',
    image: require('../../assest/John.jpeg'),
  },
  {
    id: 3,
    name: 'Jonathan Trott',
    jobRole: 'Mathematician',
    image: require('../../assest/Jonathan.jpeg'),
  }
]

function RenderAdvisor({ item }) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.advisorBox}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={item.image} style={styles.imgContainer} />
          <View style={styles.info}>
            <Text style={styles.nametext}>{item.name}</Text>
            <Text>{item.jobRole}</Text>
          </View>

        </View>

      </View>
      <View style={{ borderBottomWidth: 0.2 }}></View>


    </View>
  )
}

function SeacrchAdvisor() {

  return (
    <FlatList
      data={SearchAdvisorData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={RenderAdvisor}
    />
  )
}
export default SeacrchAdvisor;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  advisorBox: {
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    justifyContent: 'center',

  },
  imgContainer: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  info: {
    marginLeft: 10
  },
  nametext: {
    fontSize: 20,
    fontWeight: 'bold'
  },


})