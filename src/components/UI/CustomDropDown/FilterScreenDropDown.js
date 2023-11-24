import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const FilterScreenDropDown = ({ data, onChange, value1 }) => {
  const [value, setValue] = useState(value1);
  const [isFocus, setIsFocus] = useState(false);
  //console.log(value)



  return (

    <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={250}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        onChange(item.label);
        setValue(item.value);
        setIsFocus(false);
      }}

    />
  );
};

export default FilterScreenDropDown;

const styles = StyleSheet.create({
  dropdown: {
    width: 250,
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});