import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import LargeButton from '../components/UI/LargeButton'
import EducationInfomationRender from '../components/EducationInformation/EducationInfomationRender'
import IconButton from '../components/UI/IconButton'

const EducationInformation = ({ navigation }) => {

  function addBtnHandler() {
    navigation.navigate('Add Education Information')
  }

  function editBtnHandler() {
    navigation.navigate('Edit Education Information')
  }


  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={{ paddingTop: 20, paddingLeft: 20, fontWeight: 'bold', color: 'black', fontSize: 17 }}>Study Preferences</Text>
        <EducationInfomationRender title='Country' text='United Kingdom' />
        <EducationInfomationRender title='Program Level' text='Master' />
        <EducationInfomationRender title='Program Field' text='Program Field 1' />
        <EducationInfomationRender title='Program Name(optional)' text='Program 1' />

        <Text style={{ paddingTop: 20, paddingLeft: 20, fontWeight: 'bold', color: 'black', fontSize: 17 }}>Latest Education</Text>

        <EducationInfomationRender title='Degree' text='Msc IT' />
        <EducationInfomationRender title='Field Of Study' text='International Foundation Programme' text1='Archaeology MScR' />
        <EducationInfomationRender title='GPA' text='4.0' />
        <EducationInfomationRender title='Year' text='2018-2019' />
        <EducationInfomationRender title='Institution' text='University Of Edinburgh' />

        <View style={styles.imgContainer}>
          <Text>document</Text>
          <View style={styles.imgBox}>
            <Image source={require('../assest/degree.jpeg')} style={styles.img} />
          </View>
        </View>

        <View style={styles.iconBtn}>
          <IconButton icon={'plus'} size={60} color={'white'} onPress={addBtnHandler} />
        </View>
      </ScrollView>


      <View style={styles.btnContainer}>
        <LargeButton
          onPress={editBtnHandler}
          text='EDIT INFORMATION'
        />
      </View>

    </View>
  )
}

export default EducationInformation

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imgContainer: {
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 50
  },
  imgBox: {
    paddingTop: 15,
    paddingRight: 10
    // backgroundColor: 'red'
  },
  img: {
    width: '100%',
  },
  iconBtn: {
    position: 'absolute',
    bottom: 35,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6B0554',
    alignItem: 'center',
    paddingRight: 6

  },
  btnContainer: {
    marginBottom: 25
  }
})