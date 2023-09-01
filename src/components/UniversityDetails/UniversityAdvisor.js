import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import Advisor from "../HomeAndConsultWithCmn/Advisor";

const UniversityAdvisorDatas = [
  {
    id: 1,
    name: 'Sophie  Rivera',
    rating: 4.7,
    degree: 'Information System ',
    medium: 'English',
    image: require('../../assest/lisa.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 2,
    name: 'Wayne M',
    rating: 4.8,
    degree: 'Master in Public Health',
    medium: 'English',
    image: require('../../assest/jason.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 3,
    name: 'Mark Rogers',
    rating: 4.5,
    degree: 'Cyber Security',
    medium: 'English',
    image: require('../../assest/kate.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 4,
    name: 'Wyane M',
    rating: 4.7,
    degree: 'Information System',
    medium: 'English, Mandarin',
    image: require('../../assest/wayne.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },

];

function UniversityAdvisor() {
  const navigation = useNavigation()

  function handlePress(item) {
    // navigation.navigate("AdvisorDetail", { selectedId: item.id })
  }



  return (
    <View style={styles.AdvisorContainer}>
      <Advisor Data={UniversityAdvisorDatas} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  AdvisorContainer: {
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 10

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
    borderRadius: 5,
  },
  AdvisorName: {
    fontSize: 18,
    color: 'brown'
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
  },
  AdvisorRole: {
    paddingHorizontal: 2,
    marginRight: 5,
    backgroundColor: 'purple',
    maxHeight: 20,
    borderWidth: 1,
    borderRadius: 4
  }
});

export default UniversityAdvisor;
