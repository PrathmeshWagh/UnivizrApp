import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LogoutModal = ({ visible, onClose, onLogout }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.imageTextContainer}>
            <Image source={require('../../assest/logout.png')} style={{ width: 100, height: 100 }} />
            <Text style={styles.modalText}>Are you sure you want{'\n'} to Logout?</Text>
          </View>

          <View style={{ borderBottomWidth: 0.5, borderColor: '#808080', width: '120%' }} />

          {/* Buttons in a separate view */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>CANCEL</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 30, color: '#808080' }}>|</Text>

            <TouchableOpacity
              style={[styles.button]}
              onPress={onLogout}
            >
              <Text style={styles.logoutButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  modalView: {
    width: '88%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imageTextContainer: {
    alignItems: 'center',
  },
  modalText: {
    paddingTop: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20
  },
  button: {
    width: '48%',
    padding: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#6B0554',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonText: {
    color: '#808080',
    fontSize: 18,
    fontWeight: 'bold',
    opacity: 0.50
  },
});

export default LogoutModal;
