import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
import SelectExpertise from '../components/BecomeAdvisor/SelectExpertise';
import LargeButton from '../components/UI/LargeButton';
import ProfileInformation from '../components/BecomeAdvisor/ProfileInformation';
import Pricing from '../components/BecomeAdvisor/Pricing';
import Schedule from '../components/BecomeAdvisor/Schedule';


const BecomeAdvisor = ({ navigation }) => {
  const [currentPosition, setCurrentPosition] = useState(0);



  const labels = ["Expertise", "Profile Information", "Pricing", "Schedule"];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#6B0554',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#6B0554',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#6B0554',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#6B0554',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#6B0554',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: '#6B0554',
    stepIndicatorLabelFinishedColor: '#6B0554',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 14,
    currentStepLabelColor: '#6B0554'
  };

  function expertisePressHandler(item) {
    navigation.navigate('Expertise Details', { selectedItemName: item.title })
  }

  function nextBtnHandler() {
    setCurrentPosition((prevPosition) => prevPosition + 1);
  }

  function doneBtnHandler() {
    navigation.navigate('Profile')
  }



  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.stepindicator}>
          <StepIndicator
            stepCount={4}
            customStyles={customStyles}
            labels={labels}
            currentPosition={currentPosition}
          />
        </View>

        <View>
          {currentPosition === 0 ? (
            <>
              <Text style={styles.expertiseText}>Select Expertise</Text>
              <SelectExpertise onPress={expertisePressHandler} />
            </>
          ) : currentPosition === 1 ? (
            <ProfileInformation />

          ) : currentPosition === 2 ? (
            <Pricing />

          ) : (
            <Schedule />
          )}
        </View>
      </ScrollView>

      <View style={{ paddingVertical: 20 }}>
        {currentPosition < 3 ? (
          <LargeButton text='NEXT' onPress={nextBtnHandler} />
        ) : (
          <LargeButton text='DONE' onPress={doneBtnHandler} />
        )}
      </View>
    </View>
  );
};

export default BecomeAdvisor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  stepindicator: {
    paddingTop: 10
  },
  expertiseText: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10
  }
});
