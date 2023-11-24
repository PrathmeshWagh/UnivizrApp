import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, Text, Pressable, FlatList } from "react-native";
import RoleBox from "../UI/RoleBox";




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

          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <Image source={item.ratingimage} style={styles.ratingimage} />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
            <View style={{ paddingTop: 2 }}>
              <RoleBox role={item.role} color={item.role === 'Ambassder' ? '#8560A8' : '#606AA8'} />
            </View>
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
    marginBottom: 25,
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