import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EducationInfomationRender = ({ title, text, text1 }) => {
  var Title = 'Field Of Study';
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        {title === Title ?
          <View>
            <Text style={styles.textBelowUnderline}>{text}</Text>
            <Text style={styles.text1}>{text1}</Text>
          </View>
          :
          <Text style={styles.text}>{text}</Text>
        }

      </View>
    </View>
  )
}

export default EducationInfomationRender

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    borderBottomWidth: 4,
    borderColor: '#E8E8E8',
  },
  innerContainer: {
    paddingHorizontal: 20
  },
  title: {
    paddingTop: 20,

  },
  textBelowUnderline: {
    paddingVertical: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    borderBottomWidth: 0.5
  },
  text: {
    paddingVertical: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  text1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 10
  }

})