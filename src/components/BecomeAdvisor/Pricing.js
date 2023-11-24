import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import TextInputBox from '../UI/TextInputBox';

const Pricing = () => {
  return (
    <View style={styles.container}>
      <TextInputBox title='Add Minute Rate' data='$12' />
      <TextInputBox title='Add Free Rate' data='30 minutes' />
    </View>
  )
}

export default Pricing

const styles = StyleSheet.create({

  container: {
    paddingTop: 20,
    paddingHorizontal: 20
  }

})