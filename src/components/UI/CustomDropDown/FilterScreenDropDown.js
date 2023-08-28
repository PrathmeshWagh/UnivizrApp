import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import IconButton from '../IconButton';

const FilterScreenDropDown = ({ dropDowndata }) => {

  const [isClicked, setIsClicked] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const dropdownRef = useRef();

  const handleDropdownPress = () => {
    dropdownRef.current.measure((x, y, width, height, pageX, pageY) => {
      // console.log('Position:', x, y);
      // console.log('Dimensions:', width, height);
      // console.log('Page Position:', pageX, pageY);
      setDropdownLayout({ x: pageX, y: pageY, width, height });
      setIsClicked(!isClicked);
    });
  };

  const checkBoxPress = (item) => {
    setSelectedOption(item);
    setIsClicked(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        ref={dropdownRef} // pass the reference of touchableopacity compo to dropdownRef
        style={styles.dropdownSelector}
        onPress={handleDropdownPress}
      >
        <Text style={{ fontSize: 14, color: 'black' }}>{selectedOption}</Text>
        <IconButton icon={'chevron-down'} size={20} />
      </TouchableOpacity>
      <Modal transparent={true} animationType="slide" visible={isClicked}>
        <View style={styles.dropdownOverlay}>
          <View style={[styles.dropdownContentBox, { top: dropdownLayout.y + dropdownLayout.height, }]}>
            <FlatList
              data={dropDowndata}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.dropdownDatainnerContainer} onPress={() => checkBoxPress(item.option)}>
                  <Text style={{ color: 'black' }}>{item.option}</Text>
                  <IconButton
                    icon={'checkbox-blank-outline'}
                    size={35}
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

export default FilterScreenDropDown;

const styles = StyleSheet.create({
  container: {

  },
  dropdownSelector: {
    width: 200,
    height: 30,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#8e8e8e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    marginLeft: 5
  },
  dropdownOverlay: {
    flex: 1,
    width: '100%',
    marginHorizontal: 20
  },
  dropdownContentBox: {
    // height: 180,
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
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: '#8e8e8e',

  },
});
