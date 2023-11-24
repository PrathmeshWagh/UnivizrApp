import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import AdvisorDetailScreenBtn from '../components/UI/AdvisorDetailScreenBtn';
import ConsultDurationButton from '../components/UI/ConsultDurationButton';
import { useState } from 'react';
import ConfirmBookingModal from '../components/UI/ConfirmBookingModal';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('2020-05-25');
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    if (isModalVisible) {
      const time = setTimeout(() => {
        setModalVisible(false)
      }, 1500)
    }
  }, [isModalVisible])

  function bookingConfirmationBtnHandler() {
    setModalVisible(true)
  }

  function handleSelectedDate(date) {
    const formattedDate = moment(date).format('DD MMM YYYY'); // Format the date as '30 May 2020'
    setSelectedDate(formattedDate)
    console.log(formattedDate)

  }

  function consultTimeBtnHandler(time) {
    setSelectedTime(time)
  }

  function consultDurationBtnHandler(duration) {
    setSelectedDuration(duration)
  }



  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: "#6B0554" }}>25 May 2020 - 31 May 2020</Text>

        <View style={styles.dateContainer}>
          <CalendarStrip
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
            style={{ height: 80, paddingTop: 10, paddingBottom: 10 }}
            calendarHeaderStyle={{ color: '#6B0554' }}
            calendarColor={'#EBDDE8'}
            dateNumberStyle={{ color: '#808080' }}
            dateNameStyle={{ color: '#808080' }}
            highlightDateNumberStyle={{ color: '#6B0554' }}
            highlightDateNameStyle={{ color: '#6B0554' }}
            disabledDateNameStyle={{ color: 'grey' }}
            disabledDateNumberStyle={{ color: 'grey' }}
            // datesWhitelist={datesWhitelist}
            // datesBlacklist={datesBlacklist}
            startingDate={moment('2020-05-25')}
            onDateSelected={handleSelectedDate}
            iconContainer={{ flex: 0.1 }}

          />
        </View>

        <View>
          <Text style={{ paddingBottom: 10, color: '#6B0554' }}>Select your consultation time</Text>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 10 }}>
              <AdvisorDetailScreenBtn
                name={'7:00 PM'}
                color={selectedTime === '7:00 PM' ? '#6B0554' : '#808080'}
                onPress={() => consultTimeBtnHandler('7:00 PM')}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <AdvisorDetailScreenBtn
                name={'7:15 PM'}
                color={selectedTime === '7:15 PM' ? '#6B0554' : '#808080'}
                onPress={() => consultTimeBtnHandler('7:15 PM')}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <AdvisorDetailScreenBtn
                name={'7:30 PM'}
                color={selectedTime === '7:30 PM' ? '#6B0554' : '#808080'}
                onPress={() => consultTimeBtnHandler('7:30 PM')}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <AdvisorDetailScreenBtn
                name={'7:45 PM'}
                color={selectedTime === '7:45 PM' ? '#6B0554' : '#808080'}
                onPress={() => consultTimeBtnHandler('7:45 PM')}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={{ marginRight: 10 }}>
              <AdvisorDetailScreenBtn
                name={'8:00 PM'}
                color={selectedTime === '8:00 PM' ? '#6B0554' : '#808080'}
                onPress={() => consultTimeBtnHandler('8:00 PM')}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <AdvisorDetailScreenBtn
                name={'8:15 PM'}
                color={selectedTime === '8:15 PM' ? '#6B0554' : '#808080'}
                onPress={() => consultTimeBtnHandler('8:15 PM')}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <AdvisorDetailScreenBtn
                name={'8:30 PM'}
                color={selectedTime === '8:30 PM' ? '#6B0554' : '#808080'}
                onPress={() => consultTimeBtnHandler('8:30 PM')}
              />
            </View>
            <View style={{ marginRight: 10 }}>
              <AdvisorDetailScreenBtn
                name={'8:45 PM'}
                color={selectedTime === '8:45 PM' ? '#6B0554' : '#808080'}
                onPress={() => consultTimeBtnHandler('8:45 PM')}
              />
            </View>
          </View>

          <View style={{ marginTop: 50 }}>
            <Text style={{ color: '#6B0554' }}>Consultation Duration</Text>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <ConsultDurationButton
                name={'15 mins'}
                color={selectedDuration === '15 mins' ? '#6B0554' : '#808080'}
                onPress={() => consultDurationBtnHandler('15 mins')}
              />
              <ConsultDurationButton
                name={'30 mins'}
                color={selectedDuration === '30 mins' ? '#6B0554' : '#808080'}
                onPress={() => consultDurationBtnHandler('30 mins')}
              />
              <ConsultDurationButton
                name={'45 mins'}
                color={selectedDuration === '45 mins' ? '#6B0554' : '#808080'}
                onPress={() => consultDurationBtnHandler('45 mins')}
              />
              <ConsultDurationButton
                name={'60 mins'}
                color={selectedDuration === '60 mins' ? '#6B0554' : '#808080'}
                onPress={() => consultDurationBtnHandler('60 mins')}
              />
            </View>
          </View>

        </View>
      </View>
      <Pressable style={styles.bookingconfirmationBtn} onPress={bookingConfirmationBtnHandler}>
        <Text style={{ color: '#6B0554', fontWeight: 'bold' }}>Booking Confirmation</Text>
      </Pressable>

      <ConfirmBookingModal
        visible={isModalVisible}
        // onClose={bookingConfirmationBtnHandler}
        selectedDate={selectedDate.toString()}
        selectedTime={selectedTime}
        selectedDuration={selectedDuration}
      />

    </>
  )
}

export default Booking

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
    paddingBottom: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#D8C0D4'
  },
  bookingconfirmationBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  dateContainer: {
    paddingTop: 15,
    paddingBottom: 25
  }
})