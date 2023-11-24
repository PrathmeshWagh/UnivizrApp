import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native"
import IconButton from "../components/UI/IconButton";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import FilterScreenDropDown from "../components/UI/CustomDropDown/FilterScreenDropDown";
import LargeButton from "../components/UI/LargeButton";



function FilterScreen({ navigation, }) {
  const initialFilters = {
    CurrentStudent: false,
    PastStudent: false,
    EducationConsultant: false,
    University: false,
    HighSchool: false,
    College: false,
    EnglishInstitute: false
  }

  const [isChecked, setIsChecked] = useState(initialFilters);
  const [selectedSpeaks, setSelectedSpeaks] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // console.log(selectedCountry)



  const speakData = [
    { label: 'English', value: '1' },
    { label: 'Hindi', value: '2' },
    { label: 'French', value: '3' },
  ];

  const countryData = [
    { label: 'Australia', value: '1' },
    { label: 'France', value: '2' },
    { label: 'Itely', value: '3' },
  ];

  const stateData = [
    { label: 'New South Wales', value: '1' },
    { label: 'Grand Est', value: '2' },
    { label: 'Brittany', value: '3' },
    { label: 'Victoia', value: '4' },
  ];

  const cityData = [
    { label: 'Sydney', value: '1' },
    { label: 'Chaumont', value: '2' },
    { label: 'Redon', value: '3' },
    { label: 'Melbourne', value: '4' },
  ];

  const schoolData = [
    { label: 'Monash University', value: '1' },
    { label: 'Australian National University', value: '2' },
    { label: 'University Of Adelaide', value: '3' },
  ];

  const intrestFieldData = [
    { label: 'Health', value: '1' },
    { label: 'Law', value: '2' },
    { label: 'Sports', value: '3' },
  ];

  function ResetFilter() {
    setIsChecked(initialFilters);
  }

  function applyFilter() {
    navigation.navigate('ConsultWith', { selectedSpeaks, selectedCountry, selectedState, selectedCity });

  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.firstContainer}>
        <View style={styles.headerBtn}>
          <View style={{ flexDirection: 'row' }}>
            <IconButton
              icon={'less-than'}
              size={20}
              color={'black'}
              onPress={() => (navigation.navigate('ConsultWith'))}
              style={{ marginTop: 5, marginLeft: 5 }}
            />

            <Text style={styles.advisorText}>Advisor Filter by</Text>
          </View>
          <Pressable style={styles.resetBtn} onPress={ResetFilter}>
            <Text style={styles.btnText}>RESET</Text>
          </Pressable>
        </View>

        <View style={styles.studentContainer}>
          <View style={styles.textbox}>
            <Text style={styles.text}>Advisor</Text>
            <Text style={[styles.text, styles.lineText]}>|</Text>
            <Text style={styles.text}>Uni Ambassador</Text>
            <Text style={[styles.text, styles.lineText]} >|</Text>
            <Text style={styles.text}>Uni Repres</Text>
          </View>

          <View style={styles.studentCheckBoxContainer}>
            <View style={styles.studentCheckBoxAll}>
              <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }} disabled={false} value={isChecked.CurrentStudent} onValueChange={(value) => setIsChecked({ ...isChecked, CurrentStudent: value })} />
              <Text style={styles.checkBoxText}>Current Student</Text>
            </View>

            <View style={styles.studentCheckBoxAll}>
              <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }} disabled={false} value={isChecked.PastStudent} onValueChange={(value) => setIsChecked({ ...isChecked, PastStudent: value })} />
              <Text style={styles.checkBoxText}>Past Student</Text>
            </View>

            <View style={styles.studentCheckBoxAll}>
              <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }} disabled={false} value={isChecked.EducationConsultant} onValueChange={(value) => setIsChecked({ ...isChecked, EducationConsultant: value })} />
              <Text style={styles.checkBoxText}>Education Consultant</Text>
            </View>
          </View>

          <View style={{ marginBottom: 15, marginTop: 20, flexDirection: 'row' }}>
            <Text style={styles.speakColor}>Speaks</Text>
            <FilterScreenDropDown
              data={speakData}
              value1={selectedSpeaks}
              onChange={(itemValue) => setSelectedSpeaks(itemValue)}
            />
          </View>
        </View>

        <View style={styles.universityContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#6B0554', marginBottom: 10 }}>Uni Filter</Text>
          <View>
            <View style={styles.univLocationBoxes}>
              <Text style={{ minWidth: 80, color: '#6B0554' }}>Country</Text>
              <FilterScreenDropDown
                data={countryData}
                value1={selectedCountry}
                onChange={(itemValue) => setSelectedCountry(itemValue)}

              />
            </View>

            <View style={styles.univLocationBoxes}>
              <Text style={{ minWidth: 80, color: '#6B0554' }}>State</Text>
              <FilterScreenDropDown
                data={stateData}
                value1={selectedState}
                onChange={(itemValue) => setSelectedState(itemValue)}

              />
            </View>

            <View style={styles.univLocationBoxes}>
              <Text style={{ minWidth: 80, color: '#6B0554' }}>City</Text>
              <FilterScreenDropDown
                data={cityData}
                value1={selectedCity}
                onChange={(itemValue) => setSelectedCity(itemValue)}
              />
            </View>
          </View>

          <View style={styles.schoolTypeContainer}>
            <Text style={{ fontWeight: 'bold', color: '#6B0554' }}>School Types</Text>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <View style={{ paddingRight: 50 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }} disabled={false} value={isChecked.University} onValueChange={(value) => setIsChecked({ ...isChecked, University: value })} />
                  <Text style={{ color: '#6B0554' }}>University</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }} disabled={false} value={isChecked.College} onValueChange={(value) => setIsChecked({ ...isChecked, College: value })} />
                  <Text style={{ color: '#6B0554' }}>College</Text>
                </View>
              </View>

              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }} disabled={false} value={isChecked.HighSchool} onValueChange={(value) => setIsChecked({ ...isChecked, HighSchool: value })} />
                  <Text style={{ color: '#6B0554' }}>High School</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox tintColors={{ true: '#6B0554', false: '#808080' }} disabled={false} value={isChecked.EnglishInstitute} onValueChange={(value) => setIsChecked({ ...isChecked, EnglishInstitute: value })} />
                  <Text style={{ color: '#6B0554' }}>English Institute</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Text style={{ minWidth: 40, color: '#6B0554', }}>School Name</Text>
            <FilterScreenDropDown data={schoolData} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30, }}>
            <Text style={{ minWidth: 45, color: '#6B0554', marginRight: 5 }}>Interest field</Text>
            <FilterScreenDropDown data={intrestFieldData} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.applyButton}>
        <LargeButton text={'APPLY'} onPress={applyFilter} />
      </View>
    </View >

  )
}

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  firstContainer: {
    marginRight: 10,
  },
  headerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  advisorText: {
    fontSize: 20,
    color: '#6B0554',
    fontWeight: 'bold',
    marginLeft: 10
  },
  resetBtn: {
    marginRight: 10
  },
  btnText: {
    marginTop: 5,
    color: '#6B0554',
    fontWeight: 'bold'
  },
  studentContainer: {
    marginTop: 20,
    marginLeft: 33,
    borderBottomWidth: 1,
    borderBottomColor: '#6B0554',
  },
  textbox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#EFDEEB',
    width: '95%',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#6B0554',
  },
  text: {
    color: '#6B0554',
  },
  lineText: {
    fontSize: 15
  },
  studentCheckBoxContainer: {
    marginTop: 15,
    marginLeft: 10
  },
  checkBoxIcon: {
    marginTop: 3,
    marginRight: 4
  },
  studentCheckBoxAll: {
    alignItems: 'center',
    flexDirection: 'row',
    // marginBottom: 5
  },
  checkBoxText: {
    color: '#6B0554',
    fontSize: 17
  },
  speakColor: {
    color: '#6B0554',
    fontSize: 17,
    minWidth: 80,
  },
  dropdownBox: {
    borderRadius: 5,
    marginLeft: 10,
    width: '50%',
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'flex-end',
  },
  universityContainer: {
    marginTop: 20,
    marginLeft: 33,

  },
  univLocationBoxes: {
    flexDirection: 'row',
    marginBottom: 10
  },
  schoolTypeContainer: {
    marginTop: 20,

  },
  applyButton: {
    marginBottom: 20,
  },

})