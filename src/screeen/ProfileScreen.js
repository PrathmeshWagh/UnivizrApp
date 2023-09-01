
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import StarIcon from "../components/UI/StarIcon";
import IconWithTitle from "../components/ProfileComponent/IconWithTitle";

function ProfileScreen({ navigation }) {

  function ratingHandler() {

  }

  function PersonalInfoHandler() {
    navigation.navigate('Personal Information');
  }
  function EducationDocHandler() {

    navigation.navigate('EducationDocumentsScreen');
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
      <View style={styles.imageAndTextContainer}>
        <Image source={require('../assest/Abdullah.jpeg')} style={styles.imgBox} />
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
    paddingTop: 30
  },
  imageAndTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    borderBottomWidth: 5,
    borderBottomColor: '#E8E8E8'
  },
  imgBox: {
    width: 130,
    height: 130,
    borderRadius: 65
  },
  nameText: {
    paddingTop: 15,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  iconWithTextContainer: {

  }
})