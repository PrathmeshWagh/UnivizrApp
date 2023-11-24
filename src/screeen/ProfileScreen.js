
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import StarIcon from "../components/UI/StarIcon";
import IconWithTitle from "../components/ProfileComponent/IconWithTitle";
import IconButton from "../components/UI/IconButton";
import CustomHeaderLogout from "../components/ProfileComponent/CustomHeaderLogout";


function ProfileScreen({ navigation }) {


  function editIconHandler() {
    navigation.navigate('Edit Profile')
  }


  function ratingHandler() {
    navigation.navigate('Review And Rating')
  }

  function PersonalInfoHandler() {
    navigation.navigate('Personal Information',);
  }
  function EducationDocHandler() {
    navigation.navigate('Education Information');
  }

  function ApplicationProgressHandler() {

    navigation.navigate('Application Progress');
  }

  function BecomeAdvisHandler() {

    navigation.navigate('Become Advisor');
  }

  function FavoriteUnivHandler() {

    navigation.navigate('Favorite University');
  }

  function ChangePassHandler() {

    navigation.navigate('Change Password');
  }

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 25 }}>
        <CustomHeaderLogout headerText={'Profile'} />
      </View>

      <View style={styles.imageAndTextContainer}>
        <Image source={require('../assest/Abdullah.jpeg')} style={styles.imgBox} />

        <Pressable style={styles.editIconBox} onPress={editIconHandler}>
          <IconButton icon={'pencil'} size={25} color={'white'} style={styles.editIcon} />
        </Pressable>


        <Text style={styles.nameText}>Abdullah Algamdi</Text>
        <Pressable style={{ flexDirection: 'row' }} onPress={ratingHandler}>
          <StarIcon color='#FAB302' size={22} />
          <StarIcon color='#FAB302' size={22} />
          <StarIcon color='#FAB302' size={22} />
          <StarIcon color='#FAB302' size={22} />
          <StarIcon color='#CCCCCC' size={22} />
        </Pressable>
      </View>

      <View style={styles.iconWithTextContainer}>
        <IconWithTitle icon1={'account'} title={'Personal Information'} icon2={'greater-than'} onPress={PersonalInfoHandler} />
        <IconWithTitle icon1={'school'} title={'Education Documents'} icon2={'greater-than'} onPress={EducationDocHandler} />
        <IconWithTitle icon1={'account'} title={'Application Progress'} icon2={'greater-than'} onPress={ApplicationProgressHandler} />
        <IconWithTitle icon1={'account'} title={'Become a Advisor'} icon2={'greater-than'} onPress={BecomeAdvisHandler} />
        <IconWithTitle icon1={'heart'} title={'Favorite University'} icon2={'greater-than'} onPress={FavoriteUnivHandler} />
        <IconWithTitle icon1={'lock'} title={'Change Password'} icon2={'greater-than'} onPress={ChangePassHandler} />
      </View>

    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageAndTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    borderBottomWidth: 5,
    borderBottomColor: '#E8E8E8'
  },
  imgBox: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  editIconBox: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#6B0554',
    position: 'absolute',
    right: 130,
    top: 80
  },
  editIcon: {
    position: 'absolute',
    left: 9,
    top: 5
  },
  nameText: {
    paddingTop: 15,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black'
  },
  iconWithTextContainer: {

  }
})