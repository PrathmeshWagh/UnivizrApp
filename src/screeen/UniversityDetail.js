import { ScrollView, Text, Image, View, StyleSheet, Pressable } from "react-native";
import { UniversityDatas } from "../Constants/UniversityDatas";
import IconButton from "../components/UI/IconButton";
import { useState } from "react";
import About from "../components/UniversityDetails/About";
import Scholarship from "../components/UniversityDetails/Scholarship";
import Apply from "../components/UniversityDetails/Apply";
import UniversityAdvisor from "../components/UniversityDetails/UniversityAdvisor";
import CustomCarousel from "../components/UniversityDetails/CustomCarousel";



function UniversityDetail({ route, navigation }) {
  const UniversityId = route.params.universityData
  const SelectedUniversity = UniversityDatas.find((item) => item.id === UniversityId)

  const [selectedBtn, setSelectedBtn] = useState('ABOUT')



  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <CustomCarousel />
        <View style={styles.arrowButtonContainer}>
          <IconButton
            icon={"arrow-left"}
            size={40}
            color={"white"}
            onPress={() => {
              navigation.navigate("ConsultWith");
            }}
          />
        </View>
      </View>


      <View style={styles.nameAndHeartContainer}>
        <View style={styles.leftContent}>
          <Image source={SelectedUniversity.image} style={{ height: 30, width: 30 }} />
          <Text style={styles.universityText}>{SelectedUniversity.name}</Text>
        </View>
        <Image source={SelectedUniversity.heartImg} style={{ marginRight: 20, height: 40, width: 40 }} />
      </View>
      <View style={{ borderBottomWidth: 0.3 }} />

      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => {
            setSelectedBtn("ABOUT")
          }}
          style={[
            styles.aboutBtn,
            selectedBtn === 'ABOUT' && styles.selectedBtn
          ]}>
          <Text style={[styles.aboutText]}>ABOUT</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            setSelectedBtn("SCHOLARSHIP")
          }}
          style={[
            styles.scholarshipBtn,
            selectedBtn === 'SCHOLARSHIP' && styles.selectedBtn
          ]}>
          <Text style={[styles.scholarshiptext]}>SCHOLARSHIP</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedBtn("ADVISOR")
          }}
          style={[
            styles.advisorBtn,
            selectedBtn === 'ADVISOR' && styles.selectedBtn
          ]}>
          <Text style={[styles.advisorText]}>ADVISOR</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedBtn("APPLY")
          }}
          style={[
            styles.applyBtn,
            selectedBtn === 'APPLY' && styles.selectedBtn
          ]}>
          <Text style={[styles.applyText]}>APPLY</Text>
        </Pressable>
      </View>

      <View>
        {selectedBtn === 'ABOUT' && <About />}
        {selectedBtn === 'SCHOLARSHIP' && <Scholarship />}
        {selectedBtn === 'ADVISOR' && <UniversityAdvisor />}
        {selectedBtn === 'APPLY' && <Apply />}
      </View>

    </ScrollView>

  )
}


export default UniversityDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    width: '100%',
    height: 220,

  },
  arrowButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5
  },
  nameAndHeartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingLeft: 20,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: 'center'

  },
  universityText: {
    fontSize: 17,
    padding: 10,
    color: 'red',
    fontWeight: 'bold'
  },
  btnContainer: {
    justifyContent: 'space-evenly',
    marginTop: 20,
    flexDirection: 'row',
    height: 40,
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
  },
  aboutBtn: {
    width: '20%',
  },
  aboutText: {

    textAlign: 'center',
    color: '#782166'
  },
  scholarshipBtn: {
    width: '30%',
  },
  scholarshiptext: {

    color: '#782166',
    textAlign: 'center'
  },
  advisorText: {

    textAlign: 'center',
    color: '#782166'
  },
  advisorBtn: {
    width: '20%',

  },
  applyText: {

    textAlign: 'center',
    color: '#782166'
  },
  applyBtn: {
    width: '20%',

  },
  selectedBtn: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },


})