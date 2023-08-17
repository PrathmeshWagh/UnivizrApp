import { Text, View, StyleSheet, Image } from 'react-native'
import IconButton from '../UI/IconButton'



const UniversityDatas = [
  {
    id: 1,
    name: 'Sydney University',
    image: require('../../assest/sydney.png'),
    advisorCount: '19 Advisor ',
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />



  },
  {
    id: 2,
    name: 'Macquarie University',
    image: require('../../assest/macquarie.png'),
    advisorCount: '31 Advisor ',
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />
  },
  {
    id: 3,
    name: 'NSW University',
    image: require('../../assest/sydney.png'),
    advisorCount: '4 Advisor ',
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />
  },
  {
    id: 4,
    name: 'Western University',
    image: require('../../assest/macquarie.png'),
    advisorCount: '0 Advisor ',
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />
  }
]

function UniversityData() {
  return (
    <View style={styles.universityContainer}>
      {UniversityDatas.map((University) => (
        <View key={University.id} style={styles.univeristyBox}>
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


        </View>

      ))}

    </View>
  )
}

export default UniversityData

const styles = StyleSheet.create({

  universityContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20
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