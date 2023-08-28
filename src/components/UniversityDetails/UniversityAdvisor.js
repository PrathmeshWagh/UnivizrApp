import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";

const AdvisorDatas = [
  {
    id: 1,
    name: 'Lisa Robinett',
    rating: 4.9,
    degree: 'Information System ',
    medium: 'English',
    image: require('../../assest/lisa.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 2,
    name: 'Jason MP',
    rating: 4.8,
    degree: 'Master in Public Health',
    medium: 'English',
    image: require('../../assest/jason.jpeg'),
    role: 'Ambassder',
    ratingimage: require('../../assest/starImage.png')
  },
  {
    id: 3,
    name: 'Kate Anderson',
    rating: 4.5,
    degree: 'Cyber Security',
    medium: 'English',
    image: require('../../assest/kate.jpeg'),
    role: 'Ambassdor',
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
  {
    id: 5,
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
  return (
    <View style={styles.AdvisorContainer}>
      {AdvisorDatas.map((item) => (
        <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={styles.AdvisorBox}
          >
            <Image source={item.image} style={styles.AdvisorImage} />
            <View style={{ marginLeft: 5 }}>
              <Text style={styles.AdvisorName}>{item.name}</Text>
              <Text style={styles.AdvisorDegree}>{item.degree}</Text>
              <Text>{item.medium}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%' }}>
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <Image source={item.ratingimage} style={styles.ratingimage} />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>

            <View style={styles.AdvisorRole}>
              <Text style={{ textAlign: 'center', color: 'white' }}>{item.role}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  AdvisorContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 40
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
