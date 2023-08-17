import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import IconButton from "../components/UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import User from '../components/HomeAndAdvisorData/User';
import AreaOfIntrest from "../components/IntrestImage/AreaOfIntrest";
import { ExpertStudentData } from "../Constants/HomeData";

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

        <User Data={ExpertStudentData} />

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


});
