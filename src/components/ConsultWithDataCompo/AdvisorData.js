import { View, Image, StyleSheet, Text } from "react-native";

const AdvisorDatas = [
  {
    id: 1,
    name: 'Lisa Robinett',
    rating: 4.9,
    degree: 'Western Uni, Science Degree',
    medium: 'English',
    image: require('../../assest/profile.png'),
    role: 'Ambassdor',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 2,
    name: 'Jason MP',
    rating: 4.8,
    degree: 'UTS Uni, Information System',
    medium: 'English',
    image: require('../../assest/profile.png'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 3,
    name: 'Kate Anderson',
    rating: 4.5,
    degree: 'Macquarie Uni,Informatio System',
    medium: 'English',
    image: require('../../assest/profile.png'),
    role: 'Ambassdor',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 4,
    name: 'Wyane M',
    rating: 4.7,
    degree: 'Sydney Uni',
    medium: 'English, Mandarin',
    image: require('../../assest/profile.png'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 5,
    name: 'Raul P',
    rating: 4.9,
    degree: 'Western Uni, Science Degree',
    medium: 'English',
    image: require('../../assest/profile.png'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  }
]

function AdvisorData() {
  return (
    <View style={styles.AdvisorContainer}>
      {AdvisorDatas.map((Advisor) => (
        <View key={Advisor.id} style={styles.AdvisorBox}>
          <Image source={Advisor.image} style={styles.AdvisorImage} />

          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View >
              <View style={styles.AdvisorInfo}>
                <Text style={styles.AdvisorName}>{Advisor.name}</Text>
                <Image source={Advisor.ratingimage} style={styles.ratingimage} />
                <Text style={styles.rating}>{Advisor.rating}</Text>
              </View>

              <Text style={styles.AdvisorDegree}>{Advisor.degree}</Text>
              <Text>{Advisor.medium}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.AdvisorRole}>{Advisor.role}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default AdvisorData;

const styles = StyleSheet.create({
  AdvisorContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 40
  },
  AdvisorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,

    borderColor: 'black',
    borderRadius: 8,
  },
  AdvisorImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  ratingimage: {
    width: 20,
    height: 20,
    marginLeft: 10

  },
  AdvisorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  AdvisorName: {
    fontSize: 18,
    color: 'brown'
  },
  AdvisorDegree: {
    marginTop: 10
  },
  AdvisorRole: {

    marginTop: 5,
    paddingBottom: 3,
    minWidth: 80,
    textAlign: 'center',
    height: 20,
    borderWidth: 0.5,
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 2
  }
})