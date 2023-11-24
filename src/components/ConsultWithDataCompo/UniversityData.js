import { Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native';





function UniversityData({ Data, onPress }) {
  const navigation = useNavigation();



  return (
    <View style={styles.universityContainer}>
      {Data.map(University => (
        <Pressable
          key={University.id}
          style={styles.univeristyBox}
          onPress={() => onPress(University)}>
          <View>
            <Image source={University.image} style={styles.universityImage} />
          </View>
          <View>
            <Text style={styles.universityName}>{University.name}</Text>
            <Text>{University.advisorCount}</Text>
          </View>
          <View style={styles.heartIcon}>
            {University.heartIcon}
          </View>
        </Pressable>
      ))}
    </View>
  )
}


export default UniversityData

const styles = StyleSheet.create({

  universityContainer: {
    flex: 1,
  },
  univeristyBox: {
    flexDirection: 'row',
    // margin: 10,
    marginBottom: 25
  },
  universityImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  universityName: {
    fontSize: 18,
    color: 'brown',

  },
  heartIcon: {
    marginLeft: 'auto'
  }

})