import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import IconButton from "../components/UI/IconButton";
// import User from '../components/HomeAndAdvisorData/User';
import AreaOfIntrest from "../components/HomeScreen/AreaOfIntrest";
import { ExpertStudentData } from "../Constants/ExpertStudentData";
import Advisor from "../components/HomeAndConsultWithCmn/Advisor";

function HomeScreen({ navigation }) {

  function ExperStudentPress(item) {
    navigation.navigate('ConsultWith')
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Location</Text>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <Text style={styles.countryText}>Australia</Text>
            <IconButton icon={'chevron-down'} size={20} style={styles.downIconBtn} />
          </View>
        </View>

        <View style={styles.iconRow}>
          <IconButton icon={'map-marker'} color={'red'} size={30} style={styles.locationIcon} />

          <View style={styles.notificationAndUserIcon}>
            <IconButton
              icon={'bell-alert'}
              color={'#6b0554'}
              size={25}
              onPress={() => {
                navigation.navigate('Notification');
              }}
              style={styles.notification}
            />
            <IconButton icon={'account-circle'} color={'gray'} size={50} />
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.univBoxContainer}>
          <View style={styles.univCmnBox}>
            <Text style={styles.univText}>RMIT </Text>
            <Text style={{ textAlign: 'center', color: 'black' }}>UNIVERSITY</Text>
          </View>

          <View style={styles.univCmnBox}>
            <Text style={{ color: '#4880BF' }}>University Of{'\n'}South Australia</Text >
          </View>

          <View style={styles.univCmnBox}>
            <Text style={styles.univText}>MACQUARIE </Text>
            <Text style={{ textAlign: 'center', color: 'black' }}>University</Text>
          </View>

          <View style={styles.univCmnBox}>
            <Text style={styles.univText}>SYDNEY </Text>
            <Text style={{ textAlign: 'center', color: 'red' }}>University</Text>
          </View>

        </ScrollView>
      </View>

      <ScrollView style={styles.belowContainer}>
        <Text style={styles.consultText}>Consult With</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.ExpertText}>Expert Student</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ConsultWith')} style={styles.viewAllTextContainer} >
            <Text style={{ textDecorationLine: 'underline', fontSize: 15, opacity: 0.5 }}>View All</Text>
          </TouchableOpacity>
        </View>


        <View style={{ marginTop: 20, marginBottom: 25 }}>
          <Advisor Data={ExpertStudentData} onPress={ExperStudentPress} />
        </View>

        <View>
          <Text style={styles.consultText}>Consult With</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.ExpertText}>Area of Intrest</Text>
            <View style={styles.viewAllTextContainer}>
              <Text style={{ textDecorationLine: 'underline', fontSize: 15, opacity: 0.5 }}>View All</Text>
            </View>
          </View>

          <View style={{ paddingTop: 25 }}>
            <AreaOfIntrest />
          </View>

        </View>
      </ScrollView>

    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    borderColor: '#606AA8',
    paddingBottom: 30,
    borderBottomWidth: 3,
  },
  locationContainer: {
    position: "absolute",
    left: 50,
  },
  locationText: {
    paddingLeft: 10, // Adjust the margin as needed
    fontSize: 15,
  },
  countryText: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  locationIcon: {
    marginLeft: 10, // Adjust the margin as needed
  },
  downIconBtn: {
    marginTop: 5,
    marginLeft: 20
  },
  notificationAndUserIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    marginHorizontal: 10, // Adjust the margin as needed
  },
  univBoxContainer: {
    paddingLeft: 20,
    paddingTop: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  univCmnBox: {
    marginTop: 5,
    marginHorizontal: 10,
    borderWidth: 0.7,
    borderColor: '#C4C4C4',
    // padding: 3,
    paddingHorizontal: 6,
    paddingVertical: 6,
    textAlign: 'center',
    borderRadius: 8,
    minWidth: 100

  },
  univText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },
  belowContainer: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 15

    // marginLeft: 15
  },
  consultText: {
    fontSize: 21,
    color: '#6B0554'
  },
  ExpertText: {
    fontWeight: 'bold',
    fontSize: 24,
    // marginLeft: 20,
    color: '#6B0554'
  },
  expertstudentandViewAll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewAllTextContainer: {
    marginRight: 10
  },


});
