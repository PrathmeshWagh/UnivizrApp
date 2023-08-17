import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import IconButton from "../components/UI/IconButton";
import React, { useState } from "react";
import AdvisorData from "../components/ConsultWithDataCompo/AdvisorData";
import UniversityData from "../components/ConsultWithDataCompo/UniversityData";




function ConsultWithScreen({ navigation }) {
  const [isAdvisorPressed, setIsAdvisorPressed] = useState(true);
  const [isUniversityPressed, setIsUniversityPressed] = useState(false)



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftIconsContainer}>
            <IconButton
              icon={"arrow-left"}
              size={30}
              color={"black"}
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            />
            <Text style={styles.title}>Consult With</Text>
          </View>
          <View style={styles.rightIconsContainer}>
            <IconButton
              icon={"magnify"} size={35} color={"black"}
              onPress={() => navigation.navigate("SearchScreen")} />
            <IconButton
              icon={"filter-variant"} size={35} color={"black"}
              onPress={() => navigation.navigate("FilterScreen")} />
          </View>
        </View>

        <View style={styles.roleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Ambassder</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>EDU Expert</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Verified</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Student</Text>
          </View>
        </View>

        <View style={styles.location}>
          <Text>Location</Text>
          <View>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
            >Australia, NSW, Sydney</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <Pressable
            onPress={() => {
              setIsAdvisorPressed(true)
              setIsUniversityPressed(false)

            }}
            style={[
              styles.AdvisorBtn,
              isAdvisorPressed && styles.advisorPressed,
            ]}

          >
            <Text style={[styles.adviText, isAdvisorPressed && styles.pressedText]}>Advisor</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setIsUniversityPressed(true)
              setIsAdvisorPressed(false)
            }}
            style={[
              styles.UniversityBtn,

              isUniversityPressed && styles.universityPressed,
            ]}
          >
            <Text style={[styles.univText, isUniversityPressed && styles.pressedText]}>University</Text>
          </Pressable>
        </View>

        {isAdvisorPressed && (
          <View style={styles.contentContainer}>
            <AdvisorData />
          </View>
        )}

        {isUniversityPressed && (
          <View style={styles.contentContainer}>
            {/* Content for University */}
            <UniversityData />
          </View>
        )}
      </View>


    </ScrollView>
  );
}

export default ConsultWithScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  leftIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10

  },
  rightIconsContainer: {
    flexDirection: "row",


  },
  roleContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    marginLeft: 15
  },
  textContainer: {
    width: '16%',
    height: 20,
    marginLeft: 15,
    height: 26,
    color: 'black'
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  location: {
    marginTop: 20,
    marginLeft: 30
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    height: 40,

  },
  AdvisorBtn: {
    borderWidth: 0.7,
    width: '50%',
  },
  adviText: {
    fontWeight: 'bold',
    padding: 9,
    textAlign: 'center'
  },
  UniversityBtn: {
    borderWidth: 0.7,
    width: '50%',
  },
  univText: {
    fontWeight: 'bold',
    padding: 9,
    textAlign: 'center'
  },
  advisorPressed: {
    backgroundColor: 'red',
  },
  universityPressed: {
    backgroundColor: 'red',
  },
  pressedText: {
    color: 'white',
  },
  contentContainer: {
    marginTop: 10,
  },

});