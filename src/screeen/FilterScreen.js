import { Text, View, StyleSheet, Pressable } from "react-native"
import IconButton from "../components/UI/IconButton";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import FilterScreenDropDown from "../components/UI/CustomDropDown/FilterScreenDropDown";



function FilterScreen({ navigation }) {

  const DropDownData = {
    Speaks: [
      { option: '1' },
      { option: '2' },
    ],
    SchoolName: [
      { option: 'Monash University' },
      { option: 'Austrlian University' },
      { option: 'University Of Adelade' }
    ],
    IntrestedField: [
      { option: 'sports' },
      { option: 'Law' },

    ]
  };

  const initialFilters = {
    CurrentStudent: false,
    PastStudent: false,
    EducationConsultant: false,
    University: false,
    HighSchool: false,
    College: false,
    EnglishInstitute: false
  }

  const [isChecked, setIsChecked] = useState(initialFilters)

  function ResetFilter() {
    setIsChecked(initialFilters);
  }
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
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
              <CheckBox disabled={false} value={isChecked.CurrentStudent} onValueChange={(value) => setIsChecked({ ...isChecked, CurrentStudent: value })} />
              <Text style={styles.checkBoxText}>Current Student</Text>
            </View>

            <View style={styles.studentCheckBoxAll}>
              <CheckBox disabled={false} value={isChecked.PastStudent} onValueChange={(value) => setIsChecked({ ...isChecked, PastStudent: value })} />
              <Text style={styles.checkBoxText}>Past Student</Text>
            </View>

            <View style={styles.studentCheckBoxAll}>
              <CheckBox disabled={false} value={isChecked.EducationConsultant} onValueChange={(value) => setIsChecked({ ...isChecked, EducationConsultant: value })} />
              <Text style={styles.checkBoxText}>Education Consultant</Text>
            </View>
          </View>

          <View style={{ marginBottom: 15, marginTop: 20, flexDirection: 'row' }}>
            <Text style={styles.speakColor}>Speaks</Text>
            <FilterScreenDropDown dropDowndata={DropDownData.Speaks} />
          </View>
        </View>

        <View style={styles.universityContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#6B0554', marginBottom: 10 }}>Uni Filter</Text>
          <View>
            <View style={styles.univLocationBoxes}>
              <Text style={{ minWidth: 80, color: '#6B0554' }}>Country</Text>
              <FilterScreenDropDown dropDowndata={DropDownData.Speaks} />
            </View>

            <View style={styles.univLocationBoxes}>
              <Text style={{ minWidth: 80, color: '#6B0554' }}>State</Text>
              <FilterScreenDropDown dropDowndata={DropDownData.Speaks} />
            </View>

            <View style={styles.univLocationBoxes}>
              <Text style={{ minWidth: 80, color: '#6B0554' }}>City</Text>
              <FilterScreenDropDown dropDowndata={DropDownData.Speaks} />
            </View>
          </View>

          <View style={styles.schoolTypeContainer}>
            <Text style={{ fontWeight: 'bold', color: '#6B0554' }}>School Types</Text>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <View style={{ paddingRight: 50 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox disabled={false} value={isChecked.University} onValueChange={(value) => setIsChecked({ ...isChecked, University: value })} />
                  <Text style={{ color: '#6B0554' }}>University</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox disabled={false} value={isChecked.College} onValueChange={(value) => setIsChecked({ ...isChecked, College: value })} />
                  <Text style={{ color: '#6B0554' }}>College</Text>
                </View>
              </View>

              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox disabled={false} value={isChecked.HighSchool} onValueChange={(value) => setIsChecked({ ...isChecked, HighSchool: value })} />
                  <Text style={{ color: '#6B0554' }}>High School</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox disabled={false} value={isChecked.EnglishInstitute} onValueChange={(value) => setIsChecked({ ...isChecked, EnglishInstitute: value })} />
                  <Text style={{ color: '#6B0554' }}>English Institute</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Text style={{ minWidth: 40, color: '#6B0554' }}>School Name</Text>
            <FilterScreenDropDown dropDowndata={DropDownData.SchoolName} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30, }}>
            <Text style={{ minWidth: 45, color: '#6B0554' }}>Interest field</Text>
            <FilterScreenDropDown dropDowndata={DropDownData.IntrestedField} />
          </View>
        </View>
      </View>


      <Pressable onPress={() => (navigation.navigate('ConsultWith'))}
        style={styles.applyButton}
      >
        <Text style={styles.applybtnText}>APPLY</Text>
      </Pressable>
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
    marginRight: 10
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
    fontSize: 16
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
    backgroundColor: '#6B0554',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 15,
    paddingVertical: 20
  },
  applybtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})