import React from 'react';
import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { AdvisorDatas } from '../Constants/AdvisorDatas';
import AdvisorDetailScreenBtn from '../components/UI/AdvisorDetailScreenBtn';
import LangandSpeacilityBtn from '../components/UI/LangandSpeacilityBtn';
import StarIcon from '../components/UI/StarIcon';

const AdvisorDetail = ({ navigation, route }) => {
  const SelectedadvisorId = route.params.selectedId;
  const AdvisorData = AdvisorDatas.find((data) => data.id === SelectedadvisorId)

  function callNowBtnPress() {
    navigation.navigate('Booking')
  }

  function scheduleBtnPress() {

  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={AdvisorData.image} style={styles.imageContainer} />
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

        <View style={styles.chatbtnContainer}>
          <IconButton
            icon={"wechat"}
            size={40}
            color={"white"}
            onPress={() => {
              navigation.navigate("AdvisorChat", { selectedPerson: AdvisorData, navigatingToWeChat: true })
            }}
            style={styles.wechatBox}
          />
          {/* <Text style={{ color: 'white', fontWeight: 'bold' }}>CHAT</Text> */}

        </View>

      </View>
      <ScrollView style={{ paddingVertical: 15, paddingLeft: 15 }}>
        <View style={styles.textAndBtnContainer}>
          <View>
            <Text style={styles.advisorNameText}>{AdvisorData.name}</Text>
            <Text style={styles.advisorDegreeText}>{AdvisorData.degree}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
              <Image source={AdvisorData.ratingimage} style={styles.ratingimage} />
              <Text style={styles.ratingText}>{AdvisorData.rating}</Text>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <View >
              <AdvisorDetailScreenBtn name={'Call Now'} color={'green'} onPress={callNowBtnPress} />
              <View style={{ paddingTop: 8, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>$10</Text>
                <Text style={{ fontSize: 12, }}>Per Minute</Text>
              </View>
            </View>

            <View style={{ marginHorizontal: 20 }}>
              <AdvisorDetailScreenBtn name={'Schedule'} color={'#6B0554'} onPress={scheduleBtnPress} />
              <View style={{ alignItems: 'center', paddingTop: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>42</Text>
                <Text style={{ fontSize: 12 }}>Successfull</Text>
                <Text style={{ fontSize: 12 }}>Sesssion</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>About Me</Text>
            <Text >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet
              velit euismod lobortis scelerisque. Nullam mollis mauris purus, sit amet viverra
              felis semper at. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Etiam bibendum risus eu nunc finibus, id suscipit leo dignissim.

            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>What i can help you with</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet
              velit euismod lobortis scelerisque.
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Languages:</Text>
            <View style={styles.languageButtonContainer}>
              <LangandSpeacilityBtn name={'English'} />
              <LangandSpeacilityBtn name={'Arabic'} />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Specialties:</Text>
            <View style={styles.SpecialitiesButtonContainer}>
              <LangandSpeacilityBtn name={'Science'} />
              <LangandSpeacilityBtn name={'Law'} />
              <LangandSpeacilityBtn name={'Business'} />
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 25, color: 'maroon' }}>Education</Text>
            <Text style={{ color: 'maroon' }}>Bachelor In Information Technology,{AdvisorData.degree}</Text>
          </View>
        </View>

        <View style={{ marginTop: 30, marginBottom: 50, paddingRight: 20 }}>
          <Text style={styles.reviewText}>My Review:</Text>
          <View style={styles.imgNameAndTime}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assest/Abdullah.jpeg')} style={{ height: 60, width: 60, borderRadius: 30 }} />
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Abdullah Algamdi</Text>
                <View style={{ flexDirection: 'row' }}>
                  <StarIcon color='#FAB302' size={22} />
                  <StarIcon color='#FAB302' size={22} />
                  <StarIcon color='#FAB302' size={22} />
                  <StarIcon color='#FAB302' size={22} />
                  <StarIcon color='#CCCCCC' size={22} />
                </View>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: 'bold' }}>02:37 PM</Text>
            </View>

          </View>
          <Text style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdvisorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 220,
    borderBottomWidth: 1,
    position: 'relative'
  },
  arrowButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  chatbtnContainer: {

    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  wechatBox: {
    marginBottom: 5,
    padding: 5,
    width: 80,
    height: 40,
    borderWidth: 0.5,
    backgroundColor: 'gray',
    borderRadius: 8,
    borderColor: 'black',
    opacity: 0.8

  },
  textAndBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  advisorNameText: {
    color: '#6B0554',
    fontSize: 22,

  },
  advisorDegreeText: {
    color: 'black'
  },
  btnContainer: {
    flexDirection: 'row',
  },
  ratingimage: {
    width: 20,
    height: 20,
  },
  ratingText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#6B0554',
  },
  bottomContainer: {
    marginTop: 10,
    paddingRight: 15
  },
  languageButtonContainer: {
    flexDirection: 'row',
    marginTop: 5,

  },
  languageButton: {
    marginRight: 10,
    backgroundColor: 'green',
    width: '25%',
    borderRadius: 4
  },
  SpecialitiesButtonContainer: {
    flexDirection: 'row'
  },
  SpecialitiesButton: {
    marginRight: 10,
    backgroundColor: 'green',
    width: '25%',
    borderRadius: 4
  },
  reviewText: {
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 8
  },
  imgNameAndTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  }
});
