import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, Text, Pressable, FlatList } from "react-native";
import RoleBox from "../UI/RoleBox";

export const AdvisorDatas = [
  {
    id: 1,
    name: 'Lisa Robinett',
    rating: 4.9,
    degree: 'Western Uni, Science ',
    medium: 'English',
    image: require('../../assest/lisa.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 2,
    name: 'Jason MP',
    rating: 4.8,
    degree: 'UTS Uni',
    medium: 'English',
    image: require('../../assest/jason.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 3,
    name: 'Kate  ',
    rating: 4.5,
    degree: 'Macquarie Uni',
    medium: 'English',
    image: require('../../assest/kate.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 4,
    name: 'Wyane M',
    rating: 4.7,
    degree: 'Sydney Uni',
    medium: 'English, Mandarin',
    image: require('../../assest/wayne.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 5,
    name: 'Raul P',
    rating: 4.9,
    degree: 'Western Uni, Security',
    medium: 'English',
    image: require('../../assest/paul.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },

]

function Advisor({ Data, onPress }) {
  const navigation = useNavigation()

  return (
    <View style={styles.AdvisorContainer}>
      {Data.map(item => (
        <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable
            style={styles.AdvisorBox}
            onPress={() => onPress(item)}
          >
            <Image source={item.image} style={styles.AdvisorImage} />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.AdvisorName}>{item.name}</Text>
              <Text style={styles.AdvisorDegree}>{item.degree}</Text>
              <Text>{item.medium}</Text>
            </View>
          </Pressable>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <Image source={item.ratingimage} style={styles.ratingimage} />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
            <RoleBox role={item.role} color={item.role === 'Ambassder' ? '#8560A8' : '#606AA8'} />
          </View>
        </View>
      ))}
    </View>
  );
}

export default Advisor;

const styles = StyleSheet.create({
  AdvisorContainer: {
    flex: 1,
  },
  AdvisorBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    maxWidth: '60%'
  },
  AdvisorImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  AdvisorName: {
    fontSize: 18,
    color: '#451064'
  },
  AdvisorDegree: {
    marginTop: 10
  },
  ratingimage: {
    width: 20,
    height: 20,
  },
  AdvisorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
  }
})