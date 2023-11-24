import { StyleSheet, Text, View, Modal, Image } from 'react-native'
import React from 'react'

const ConfirmBookingModal = ({ visible, selectedDate, selectedTime, selectedDuration }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
    // onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Image source={require('../../assest/kate.jpeg')} style={styles.imgBox} />
          <Text style={{ paddingTop: 10, color: '#6B0554', fontSize: 16 }}>Kate Anderson</Text>
          <Text style={{ paddingTop: 15, color: '#6B0554' }}>{selectedDate}, {selectedTime} - {selectedDuration}</Text>
          <Text style={{ paddingTop: 15, fontWeight: 'bold', color: '#6B0554' }}>Booking Confirmed</Text>
        </View>

      </View>
    </Modal>
  )
}

export default ConfirmBookingModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  modalView: {
    width: '70%',
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imgBox: {
    width: 80,
    height: 80,
    borderRadius: 40
  }
})