import { Text, View, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import IconButton from '../UI/IconButton'
import { useNavigation } from '@react-navigation/native';



export const UniversityDatas = [
  {
    id: 1,
    name: 'Sydney University',
    image: require('../../assest/sydney.png'),
    advisorCount: '19 Advisor ',
    backImg: require('../../assest/SydneyUimg.jpeg'),
    heartImg: require('../../assest/heartimg.png'),
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />,

  },
  {
    id: 2,
    name: 'Macquarie University',
    image: require('../../assest/macquarie.png'),
    advisorCount: '31 Advisor ',
    backImg: require('../../assest/macquarieUniImg.jpeg'),
    heartImg: require('../../assest/heartimg.png'),
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />,

  },
  {
    id: 3,
    name: 'NSW University',
    image: require('../../assest/sydney.png'),
    advisorCount: '4 Advisor ',
    backImg: require('../../assest/nswUnivImg.jpeg'),
    heartImg: require('../../assest/heartimg.png'),
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />,

  },
  {
    id: 4,
    name: 'Western University',
    image: require('../../assest/macquarie.png'),
    advisorCount: '0 Advisor ',
    backImg: require('../../assest/WestUiMG.jpeg'),
    heartImg: require('../../assest/heartimg.png'),
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />,

  }
]

function UniversityData() {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.universityContainer}>
      {UniversityDatas.map((University) => (
        <Pressable key={University.id} style={styles.univeristyBox} onPress={() => navigation.navigate("UniversityDetail", { universityData: University.id })}>
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
    </ScrollView>
  )
}

export default UniversityData

const styles = StyleSheet.create({

  universityContainer: {
    flex: 1,
  },
  univeristyBox: {
    flexDirection: 'row',
    margin: 10,
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