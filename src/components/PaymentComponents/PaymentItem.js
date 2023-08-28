import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PaymentItemDetail from './PaymentItemDetail'

const PaymentItem = ({ item }) => {

  return (
    <View style={styles.dataContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
        <Text style={styles.UsernameText}>{item.name}</Text>
        <Text style={styles.userIdText}>{item.userId}</Text>
      </View>
      <PaymentItemDetail itemText='Service Provider : ' value={item.ServiceProvider} />
      <PaymentItemDetail itemText='Date and Time : ' value={item.DateAndTime} />
      <PaymentItemDetail itemText='Amount : ' value={item.Amount} />
      <PaymentItemDetail itemText='Payment Id : ' value={item.PaymentId} />
      <PaymentItemDetail itemText='Payment Source : ' value={item.PaymentSource} />
      <PaymentItemDetail itemText='Payment Status : ' value={item.PaymentStatus} />
    </View>
  )
}


export default PaymentItem

const styles = StyleSheet.create({
  dataContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 4,
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  UsernameText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
  userIdText: {
    color: '#6B0554',
    fontWeight: 'bold',
  }
})