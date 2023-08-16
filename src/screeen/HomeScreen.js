import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';
import IconButton from "../components/UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ExpertStudentData } from "../Constants/HomeData";
import AreaOfIntrest from "../components/IntrestImage/AreaOfIntrest";

function HomeScreen() {
  const navigation = useNavigation(); // Move this inside the component.

  // const countries = [
  //   'India',
  //   'Australia',
  //   'America',
  //   'France',
  //   'UK',
  // ];

  // const [selectCountry, setSelectCountry] = useState(countries[0]);

  // const handleCountryChange = (country) => {
  //   setSelectCountry(country)
  // }

  return (
    <>
      <View style={styles.uppercontainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Location</Text>
        </View>

        <View style={styles.iconRow}>
          <IconButton icon={'map-marker'} color={'red'} size={30} style={styles.locationIcon} />

          {/* <View style={styles.pickerContainer}>
          <Picker selectedValue={selectCountry} onValueChange={handleCountryChange}>
            {countries.map((country, index) => (
              <Picker.Item key={index} label={country} value={country} />
            ))}
          </Picker>
        </View> */}

          <View style={styles.notificationAndUserIcon}>
            <IconButton
              icon={'bell-alert'}
              color={'green'}
              size={30}
              onPress={() => {
                navigation.navigate('Notification');
              }}
              style={styles.notification}
            />
            <IconButton icon={'account-circle'} color={'gray'} size={50} style={styles.userIcon} />
          </View>
        </View>

        <View style={styles.univBoxContainer}>
          <View style={styles.univCmnBox}>
            <Text style={styles.univText}>RMIT UNIVERSITY</Text>
          </View>
          <View style={styles.univCmnBox}>
            <Text style={styles.univText}>University Of South Australia</Text>
          </View>
          <View style={styles.univCmnBox}>
            <Text style={styles.univText}>Australia University</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.belowContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.consultText}>Consult With</Text>
            <Text style={styles.ExpertText}>Expert Student</Text>
          </View>

          <View style={styles.viewAllLink}>
            <TouchableOpacity onPress={() => navigation.navigate('ConsultWith')}>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.studentsContainer}>
          {ExpertStudentData.map((student) => (
            <View key={student.id} style={styles.studentBox}>
              <Image source={student.image} style={styles.studentImage} />

              <View style={{ flex: 3, flexDirection: 'row' }}>
                <View >
                  <View style={styles.studentInfo}>
                    <Text style={styles.studentName}>{student.name}</Text>
                    <Image source={student.ratingimage} style={styles.ratingimage} />
                    <Text style={styles.rating}>{student.rating}</Text>
                  </View>

                  <Text style={styles.studentDegree}>{student.degree}</Text>
                  <Text>{student.medium}</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text style={styles.studentRole}>{student.role}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View>
          <Text style={styles.consultText}>Consult With</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.ExpertText}>Area of Intrest</Text>
            <View style={styles.viewAllLink}>
              <Text style={{ textDecorationLine: 'underline' }}>View All</Text>
            </View>
          </View>
          <AreaOfIntrest />
        </View>


      </ScrollView>

    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  uppercontainer: {
    marginTop: 25,
    borderBottomWidth: 3,
    borderColor: 'blue',
    paddingBottom: 30,
  },
  locationContainer: {
    position: "absolute",
    left: 50,
  },
  locationText: {
    marginLeft: 10, // Adjust the margin as needed
    fontSize: 15,
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
  // pickerContainer: {
  //   position: 'relative',
  //   top: 20,
  //   left: 30
  // },
  notificationAndUserIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    marginLeft: 10, // Adjust the margin as needed
  },
  userIcon: {
    marginLeft: 10, // Adjust the margin as needed
  },

  univBoxContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  univCmnBox: {
    flex: 1,
    margin: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 3,
    textAlign: 'center',
    borderRadius: 5,

  },
  univText: {
    fontSize: 18,
    textAlign: 'center'
  },
  belowContainer: {
    flex: 1,
    marginTop: 35
  },
  consultText: {
    fontSize: 20,
    marginLeft: 20,
    color: 'black'
  },
  ExpertText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
    color: 'black'
  },
  expertstudentandViewAll: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewAllLink: {
    fontSize: 15,
    position: 'relative',
    top: 18,
    right: 15,
    textDecorationLine: 'underline',


  },
  studentsContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 40
  },
  studentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,

    borderColor: 'black',
    borderRadius: 8,
  },
  studentImage: {
    flex: 1,
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
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  studentName: {
    fontSize: 20,
    color: 'brown'
  },
  studentDegree: {
    marginTop: 10
  },
  studentRole: {
    marginLeft: 20,
    minWidth: 90,
    textAlign: 'center',
    padding: 3,
    height: 25,
    borderWidth: 1,
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 2
  }

});
