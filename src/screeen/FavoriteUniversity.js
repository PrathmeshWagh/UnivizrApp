import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react';
import IconButton from '../components/UI/IconButton';


const FavoriteUniversity = () => {

  const UniversityDatas = [
    {
      id: 1,
      name: 'Sydney University',
      image: require('../assest/sydney.png'),
      advisorCount: '19 Advisor ',
      heartIcon: <IconButton icon={'heart'} size={30} color={'red'} />,

    },
    {
      id: 2,
      name: 'Western University',
      image: require('../assest/macquarie.png'),
      advisorCount: '0 Advisor ',
      heartIcon: <IconButton icon={'heart'} size={30} color={'red'} />,

    }
  ]

  return (
    <View style={styles.universityContainer}>
      {UniversityDatas.map((University) => (
        <>
          <Pressable key={University.id} style={styles.univeristyBox} >
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
          <View style={{ borderBottomWidth: 0.2, color: '#8e8e8e' }} />
        </>

      ))}

    </View>
  )
}

export default FavoriteUniversity

const styles = StyleSheet.create({
  universityContainer: {
    flex: 1,
    paddingTop: 10
  },
  univeristyBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20
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