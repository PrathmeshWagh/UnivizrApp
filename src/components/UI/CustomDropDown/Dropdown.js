import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import IconButton from '../IconButton';

const Dropdown = ({ title, dropDowndata }) => {
  var Title = 'Field Of Study'

  const [isClicked, setIsClicked] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const [selectedOption, setSelectedOption] = useState(null); // Maintain the selected option

  const dropdownRef = useRef();

  const handleDropdownPress = () => {
    dropdownRef.current.measure((x, y, width, height, pageX, pageY) => {
      setDropdownLayout({ x: pageX, y: pageY, width, height });
      setIsClicked(!isClicked);
    });
  };

  const checkBoxPress = (item) => {

    // Check if the clicked option is the same as the currently selected option
    if (selectedOption === item) {
      setSelectedOption(item); // Uncheck the option
    } else {
      setSelectedOption(item); // Set the selected option
    }
    setIsClicked(!isClicked);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 15, }}>{title}</Text>
      {Title === title ?
        <>
          <TouchableOpacity
            ref={dropdownRef}
            style={styles.dropdownSelector}
            onPress={handleDropdownPress}
          >
            <Text style={styles.selectedOptionText}>
              {selectedOption ? selectedOption : ''}
            </Text>
            <IconButton icon={'chevron-down'} size={30} color={'#8e8e8e'} />
          </TouchableOpacity>

          <TouchableOpacity
            ref={dropdownRef}
            style={styles.dropdownSelector}
          // onPress={handleDropdownPress}
          >
            <Text style={styles.selectedOptionText}>
              Archarlogy MScR
            </Text>
            <IconButton icon={'chevron-down'} size={30} color={'#8e8e8e'} />
          </TouchableOpacity>

        </>
        :
        <TouchableOpacity
          ref={dropdownRef}
          style={styles.dropdownSelector}
          onPress={handleDropdownPress}
        >
          <Text style={styles.selectedOptionText}>
            {selectedOption ? selectedOption : ''}
          </Text>
          <IconButton icon={'chevron-down'} size={30} color={'#8e8e8e'} />
        </TouchableOpacity>
      }

      <Modal transparent={true} animationType="slide" visible={isClicked} >
        <View style={styles.dropdownOverlay}>
          <View style={[styles.dropdownContentBox, { top: dropdownLayout.y + dropdownLayout.height }]}>
            <FlatList
              data={dropDowndata}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.dropdownDatainnerContainer} onPress={() => checkBoxPress(item.option)}>
                  <Text style={{ color: 'black' }}>{item.option}</Text>
                  <IconButton
                    icon={
                      selectedOption === item.option
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
    </View >
  );
};


export default Dropdown;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    // paddingTop: 15
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
    color: 'black'
  },
  dropdownOverlay: {
    flex: 1,
    width: '100%',
    marginHorizontal: 20
  },
  dropdownContentBox: {
    height: 220,
    width: '90%',
    borderRadius: 4,
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 5
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
