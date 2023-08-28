import { View, Image, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import StarIcon from '../components/UI/StarIcon';
import IconButton from '../components/UI/IconButton';



function RatingScreen({ navigation }) {

  function cancelBtnHandler() {
    navigation.navigate('AdvisorDetail', { selectedId: 3 })
  }

  function submitBtnHandler() {
    navigation.navigate('Education Information')
  }


  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.infoContainer}>
          <Image source={require('../assest/kate.jpeg')} style={styles.imageBox} />
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 25 }}>Kate Anderson</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <StarIcon size={35} color={'#FBCC00'} />
            <StarIcon size={35} color={'#FBCC00'} />
            <StarIcon size={35} color={'#FBCC00'} />
            <StarIcon size={35} color={'#FBCC00'} />
            <StarIcon size={35} />
          </View>
        </View>

        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBox}>
            <IconButton icon={'checkbox-blank-outline'} size={40} />
            <Text style={styles.checkBoxText}>Apply now</Text>
          </View>
          <View style={styles.checkBox}>
            <IconButton icon={'checkbox-blank-outline'} size={40} />
            <Text style={styles.checkBoxText}>Consider Another option</Text>
          </View>
          <View style={styles.checkBox}>
            <IconButton icon={'checkbox-blank-outline'} size={40} />
            <Text style={styles.checkBoxText}>Look For Another Advisor</Text>
          </View>
        </View>

        <View>
          <Text style={styles.feedBackText}>Your Feedback</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox}
              placeHolder=''
              multiline={true}
            />
          </View>
        </View>
      </View>


      <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={cancelBtnHandler}
          style={styles.ApplyBtn}>
          <Text style={styles.applybtnText}>CANCEL</Text>
        </Pressable>

        <Pressable onPress={submitBtnHandler}
          style={styles.ApplyBtn}>
          <Text style={styles.applybtnText}>SUBMIT</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default RatingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 20
  },
  infoContainer: {
    alignItems: 'center',
  },
  imageBox: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 10
  },
  checkBoxContainer: {
    marginVertical: 20
  },
  checkBox: {
    flexDirection: 'row'
  },
  checkBoxText: {
    paddingLeft: 5,
    paddingTop: 8,
    color: '#6B0554',
    fontSize: 15,
    fontWeight: 'bold'
  },
  feedBackText: {
    color: '#6B0554',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  inputContainer: {

  },
  inputBox: {
    width: '100%',
    height: 200,
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10
  },
  ApplyBtn: {
    backgroundColor: '#6B0554',
    borderRadius: 8,
    height: 50,
    width: '45%',
    marginLeft: 10,


  },
  applybtnText: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
  }
})