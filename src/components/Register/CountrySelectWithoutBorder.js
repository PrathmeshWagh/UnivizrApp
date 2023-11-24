import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import IconButton from '../UI/IconButton';
import CountryPicker from 'react-native-country-picker-modal';


const CountrySelectWithoutBorder = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [country, setCountry] = useState(null)

  function iconHandler() {
    setIsVisible(!isVisible)
  }

  function handleCountrySelect(selectedCountry) {
    setCountry(selectedCountry.name);
    setIsVisible(false)
  }

  return (
    <View >
      <Text style={styles.titleText}>{title}</Text>
      <Pressable style={styles.countryAndIcon} onPress={iconHandler}>
        {isVisible &&
          <CountryPicker
            visible={isVisible}
            country={country}
            onSelect={handleCountrySelect}
          />}
        <Text style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: 'black',
        }}>{country}</Text>
        <IconButton icon={'greater-than'} size={20} />
      </Pressable>

    </View>
  )
}

export default CountrySelectWithoutBorder;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 15,
    paddingVertical: 20,
    color: '#6B0554',
    fontWeight: 'bold',
  },
  countryAndIcon: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomWidth: 0.2,
    borderBottomColor: '#808080',
  }

})