import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import IconButton from '../IconButton';

const MutliSelectDropdown = ({ title, dropDowndata }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]); // Maintain the selected options as an array

  const dropdownRef = useRef();

  const handleDropdownPress = () => {
    dropdownRef.current.measure((x, y, width, height, pageX, pageY) => {
      setDropdownLayout({ x: pageX, y: pageY, width, height });
      setIsClicked(true);
    });
  };

  const checkBoxPress = (item) => {
    // Check if the clicked option is already selected
    const isSelected = selectedOptions.includes(item.option);

    if (isSelected) {
      // If it's selected, remove it from the selected options
      setSelectedOptions(selectedOptions.filter((selected) => selected !== item.option));
    } else {
      // If it's not selected, add it to the selected options
      setSelectedOptions([...selectedOptions, item.option]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15 }}>{title}</Text>
      <TouchableOpacity
        ref={dropdownRef}
        style={styles.dropdownSelector}
        onPress={handleDropdownPress}
      >
        <Text style={styles.selectedOptionText}>
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : ''}
        </Text>
        <IconButton icon={'chevron-down'} size={20} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isClicked}
        onRequestClose={() => setIsClicked(false)} // Close the modal when the Android back button is pressed
      >
        <View style={styles.dropdownOverlay}>
          <View style={[styles.dropdownContentBox, { top: dropdownLayout.y + dropdownLayout.height }]}>
            <FlatList
              data={dropDowndata}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.dropdownDatainnerContainer} onPress={() => checkBoxPress(item)}>
                  <Text style={{ color: 'black' }}>{item.option}</Text>
                  <IconButton
                    icon={
                      selectedOptions.includes(item.option)
                        ? 'checkbox-marked'
                        : 'checkbox-blank-outline'
                    }
                    size={35}
                    color={'#6B0554'}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MutliSelectDropdown;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
  },
  dropdownSelector: {
    width: '100%',
    height: 60,
    borderWidth: 0.4,
    borderRadius: 4,
    borderColor: '#808080',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 10,
  },
  selectedOptionText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  dropdownOverlay: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContentBox: {
    height: 220,
    width: '90%',
    borderRadius: 4,
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 5,
  },
  dropdownDatainnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#8e8e8e',
  },
});
