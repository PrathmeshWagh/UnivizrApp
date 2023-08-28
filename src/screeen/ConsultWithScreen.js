import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import IconButton from "../components/UI/IconButton";
import React, { useState } from "react";
import AdvisorData from "../components/HomeAndConsultWithCmn/Advisor";
import UniversityData from "../components/ConsultWithDataCompo/UniversityData";
import RoleBox from "../components/UI/RoleBox";
import { AdvisorDatas } from "../components/HomeAndConsultWithCmn/Advisor";




function ConsultWithScreen({ navigation }) {

  const [isAdvisorPressed, setIsAdvisorPressed] = useState(true);
  const [isUniversityPressed, setIsUniversityPressed] = useState(false)

  function AdvisorPressed(item) {
    navigation.navigate("AdvisorDetail", { selectedId: item.id })
  }

  return (
    <ScrollView style={styles.container}>
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
            icon={"magnify"} size={35} color={'#6B0554'}
            onPress={() => navigation.navigate("SearchScreen")} />
          <IconButton
            icon={"filter-variant"} size={35} color={'#6B0554'}
            onPress={() => navigation.navigate("FilterScreen")} />
        </View>
      </View>

      <View style={styles.roleContainer}>
        <View style={styles.roleInnerContainer}>
          <RoleBox role='Ambassder' color='#8560A8' />
        </View>

        <View style={styles.roleInnerContainer}>
          <RoleBox role='Verified' color='#2C8C57' />
        </View>

        <View style={styles.roleInnerContainer}>
          <RoleBox role='EDU Expert' color='#606CA8' />
        </View>

        <View>
          <RoleBox role='Student' color='#CD9544' />
        </View>
      </View>

      <View style={styles.location}>
        <Text style={{ fontSize: 10 }}>Location</Text>
        <View>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black'
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
          <AdvisorData Data={AdvisorDatas} onPress={AdvisorPressed} />
        </View>
      )}

      {isUniversityPressed && (
        <View style={styles.contentContainer}>
          {/* Content for University */}
          <UniversityData />
        </View>
      )}



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
    color: '#6B0554',
    fontSize: 23,
    fontWeight: "bold",
    marginLeft: 10

  },
  rightIconsContainer: {
    flexDirection: "row",
  },
  roleContainer: {
    marginLeft: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  roleInnerContainer: {
    paddingRight: 10
  },
  textContainer: {
    width: '16%',
    height: 26,
    marginLeft: 15,
  },
  text1: {
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  text2: {
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  text3: {
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  text4: {
    fontSize: 10,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'yellow',
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
    backgroundColor: '#6B0554',
  },
  universityPressed: {
    backgroundColor: '#6B0554',
  },
  pressedText: {
    color: 'white',
  },
  contentContainer: {
    paddingTop: 35,
    paddingLeft: 30,
    paddingRight: 15

  },

});