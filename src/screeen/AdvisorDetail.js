import React from 'react';
import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';
import { AdvisorDatas } from '../components/HomeAndConsultWithCmn/Advisor';

const AdvisorDetail = ({ navigation, route }) => {
  const SelectedadvisorId = route.params.selectedId;

  const AdvisorData = AdvisorDatas.find((data) => data.id === SelectedadvisorId)

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
              navigation.navigate("AdvisorChat", { selectedPerson: AdvisorData })
            }}
            style={styles.wechatBox}
          />
        </View>

      </View>
      <ScrollView>
        <View style={styles.textAndBtnContainer}>
          <View>
            <Text style={styles.advisorNameText}>{AdvisorData.name}</Text>
            <Text style={styles.advisorDegreeText}>{AdvisorData.degree}</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Image source={AdvisorData.ratingimage} style={styles.ratingimage} />
              <Text style={styles.ratingText}>{AdvisorData.rating}</Text>
            </View>
          </View>

          <View style={styles.btnContainer}>
            <View>
              <Button style={styles.btn1Container}>Call Now</Button>
              <View style={{ alignItems: 'center', marginTop: 8 }}>
                <Text>$10</Text>
                <Text>Per Minute</Text>
              </View>
            </View>

            <View >
              <Button style={styles.btn2Container}>Schedule</Button>
              <View style={{ alignItems: 'center', marginTop: 5 }}>
                <Text>42</Text>
                <Text>Successfull</Text>
                <Text>Sesssion</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>About Me</Text>
            <Text >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet
              velit euismod lobortis scelerisque. Nullam mollis mauris purus, sit amet viverra
              felis semper at. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Etiam bibendum risus eu nunc finibus, id suscipit leo dignissim.

            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>What i can help you with</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet
              velit euismod lobortis scelerisque.
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>Languages:</Text>
            <View style={styles.languageButtonContainer}>
              <Button style={styles.languageButton}>English</Button>
              <Button style={styles.languageButton}>Arabic</Button>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>Specialties:</Text>
            <View style={styles.SpecialitiesButtonContainer}>
              <Button style={styles.SpecialitiesButton}>Science</Button>
              <Button style={styles.SpecialitiesButton}>Law</Button>
              <Button style={styles.SpecialitiesButton}>Business</Button>
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 25, color: 'maroon' }}>Education</Text>
            <Text style={{ color: 'maroon' }}>Bachelor In Information Technology,{AdvisorData.degree}</Text>
          </View>

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
    marginTop: 15,
    marginLeft: 20
  },
  advisorNameText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  advisorDegreeText: {
    color: 'black'
  },
  btnContainer: {
    marginRight: 20,
    flexDirection: 'row',
  },
  btn1Container: {
    marginRight: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  btn2Container: {
    marginRight: 10,
    backgroundColor: 'maroon',
    borderRadius: 4,
  },
  ratingimage: {
    width: 15,
    height: 15,
  },
  ratingText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16
  },
  bottomContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  languageButtonContainer: {
    flexDirection: 'row'
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
  }
});
