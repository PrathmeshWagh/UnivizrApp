import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaymentItemDetail = ({ itemText, value }) => {
  console.log(value)
  return (
    <View style={styles.paymentDetailContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Text>{itemText}</Text>
        <Text style={[styles.paymentDetailText, value === 'Remaining To Transfer' && styles.paymentStatusText, value === 'Transfered' && styles.paymentStatusText2]}>{value}</Text>
      </View>
    </View>
  )
}

export default PaymentItemDetail

const styles = StyleSheet.create({
  paymentDetailContainer: {
    paddingBottom: 5
  },
  paymentDetailText: {
    fontWeight: 'bold',
    color: 'black'
  },
  paymentStatusText: {
    color: 'orange'
  },
  paymentStatusText2: {
    color: 'green'
  }
})