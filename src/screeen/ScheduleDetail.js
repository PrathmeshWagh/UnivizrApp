import { View, Image, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { UpcomingDatas } from '../components/ScheduleScreenData/ScheduleData';
import StarIcon from '../components/UI/StarIcon';
import TitleAndBorder from '../components/ScheduleDetailsComponent/TitleAndBorder';
import { useState } from 'react';
import LargeButton from '../components/UI/LargeButton';


function ScheduleDetail({ route, navigation }) {
  const selectedItem = route.params.SelectedItem;
  const [selectedBtn, SetSelectedBtn] = useState('MARK AS COMPLETED');

  const selectedAdvisor = UpcomingDatas.find((data) => data.id === selectedItem.id)


  var BtnTitle2 = 'GIVE FEEDBACK'

  function BtnPressed() {
    if (selectedBtn === 'MARK AS COMPLETED') {
      SetSelectedBtn(BtnTitle2)
    } else {
      navigation.navigate('Rating')
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageandStatus}>
          <View style={styles.innerImage}>
            <Image source={selectedAdvisor.image} style={styles.imgcontainer} />
            <Text>{selectedAdvisor.name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <StarIcon size={20} />
              <StarIcon size={20} />
              <StarIcon size={20} />
              <StarIcon size={20} />
              <StarIcon size={20} />
            </View>
          </View>
          {/* <View><Text>{selectedItem.status}</Text></View> */}
        </View>

        <TitleAndBorder
          title='Date'
          text='22/06/2023'
        />

        <TitleAndBorder
          title='Start Time'
          text='06:45 PM'
        />

        <TitleAndBorder
          title='End Time'
          text='06:45 PM'

        />

        <TitleAndBorder
          title='Note'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
          luctus massanec neque accumsan sagittis. Donec accumsan metus id fringilla 
          gravida. Integer luctusneque nec consectetur vulputate. Nam lobortis enim 
          ut nunc convallis pulvinar.'
        />

        <View style={{ marginHorizontal: 15, marginTop: 15 }}>
          <Text style={styles.title}>Services</Text>
          <View style={styles.servicesInnerContainer}>
            <Text>Art Of World Service</Text>
            <Text>$15.00</Text>
          </View>
          <View style={styles.servicesInnerContainer}>
            <Text>Technology Service</Text>
            <Text>$23.50</Text>
          </View>
          <View style={styles.servicesTotalContainer}>
            <Text style={styles.title}>Total</Text>
            <Text style={styles.title}>$33.50</Text>
          </View>
        </View>

      </ScrollView>

      {/* <Pressable onPress={BtnPressed}
        style={styles.ApplyBtn}>
        <Text style={styles.applybtnText}>{selectedBtn}</Text>
      </Pressable> */}

      <LargeButton
        onPress={BtnPressed}
        text={selectedBtn}
      />
    </View>
  )
}

export default ScheduleDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 20,

  },
  innerImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageandStatus: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    borderBottomWidth: 4,
    borderColor: '#E8E8E8',
  },
  imgcontainer: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  servicesInnerContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderBottomWidth: 0.5
  },
  servicesTotalContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 35,

  },
})