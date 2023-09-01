import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import LargeButton from '../components/UI/LargeButton';
import IconButton from '../components/UI/IconButton';
import TextInputWithTitle from '../components/UI/TextInputWithTitle';
import SelectDataWithIcon from '../components/Register/SelectDataWithIcon';
import CheckBox from '@react-native-community/checkbox';


const UserRegister = ({ navigation, route }) => {

  const { selectedLocation } = route.params || {};
  const { city, country } = selectedLocation || {};

  const [isMaleSelected, setIsMaleSelected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);





  function NextBtnHandler() {
    navigation.navigate('Phone Number')
  }

  function selectCityHandler() {
    navigation.navigate('Select City')
  }

  function selectCountryHandler() {
    navigation.navigate('Select Country')
  }
  return (
    <View style={styles.Parentcontainer}>

      <View style={styles.headerContainer}>
        <CustomHeader headerText='Register' />
      </View>

      <View style={{ flex: 1, justifyContent: 'space-between' }}>

        <ScrollView style={{ paddingHorizontal: 20 }}>
          <View style={styles.iconContainer}>
            <IconButton icon='account' size={80} />
          </View>


          <TextInputWithTitle title='UserName' />
          <TextInputWithTitle title='Email' />

          <SelectDataWithIcon title={'Select City'} onPress={selectCityHandler} value={city} />

          <SelectDataWithIcon title={'Select Country'} onPress={selectCountryHandler} value={country} />

          <TextInputWithTitle title='Zip Code' />

          <Text style={styles.genderTitle}>Gender</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.genderIcon, { marginRight: 30 }]}>
              <IconButton
                icon={isMaleSelected ? 'record-circle-outline' : 'circle-outline'}
                size={50}
                color={'#6B0554'}
                onPress={() => setIsMaleSelected(true)}
              />
              <Text style={styles.genderText}>Male</Text>
            </View>

            <View style={styles.genderIcon}>
              <IconButton
                icon={!isMaleSelected ? 'record-circle-outline' : 'circle-outline'}
                size={50}
                color={'#6B0554'}
                onPress={() => setIsMaleSelected(false)}
              />
              <Text style={styles.genderText}>Female</Text>
            </View>
          </View>


          <TextInputWithTitle title='Password' passwordInput={true} />
          <TextInputWithTitle title='Confirm Password' passwordInput={true} />

          <View style={{ paddingBottom: 20, paddingTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }}
                disabled={false} value={isChecked}
                onValueChange={(value) => setIsChecked(value)}
              />
              <Text> Agree to </Text>
              <Text style={{ color: '#6B0554', fontSize: 16, fontWeight: 'bold' }}>Terms And Conditions</Text>
              <Text> and </Text>
            </View>
            <Text style={{ color: '#6B0554', paddingLeft: 35, fontSize: 16, fontWeight: 'bold' }}>Privacy Policy</Text>
          </View>

        </ScrollView>

        <View style={{ paddingTop: 15 }}>
          <LargeButton text='NEXT' onPress={NextBtnHandler} />
        </View>
      </View>




    </View>
  )
}

export default UserRegister;

const styles = StyleSheet.create({
  Parentcontainer: {
    flex: 1,

    marginBottom: 20

  },
  headerContainer: {
    paddingHorizontal: 20
  },

  iconContainer: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderTitle: {
    color: '#6B0554',
    paddingBottom: 15,
    fontWeight: 'bold',
    fontSize: 15,
    paddingVertical: 15,
  },
  genderText: {
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10
  },
  genderIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5
  }
})

