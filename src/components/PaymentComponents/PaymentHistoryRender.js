import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react';
import PaymentItem from './PaymentItem';

const PaymentHistoryRender = () => {
  const PaymentData = [
    {
      id: 1,
      userId: '#2087KD541',
      name: 'Jonathan Trott',
      ServiceProvider: 'Martin Glamor',
      DateAndTime: '12 - 05 -2020 at 06:45 PM',
      Amount: '$120.00',
      PaymentId: '5895545BE4',
      PaymentSource: 'Apple ID',
      PaymentStatus: 'Remaining To Transfer'
    },
    {
      id: 2,
      userId: '#5B87541',
      name: 'Peter Willamson',
      ServiceProvider: 'Lisa Johnson',
      DateAndTime: '10 - 07 -2022 at 01:40 PM',
      Amount: '$45.00',
      PaymentId: 'AF85458R',
      PaymentSource: 'Credit Card',
      PaymentStatus: 'Transfered'

    }
  ]

  function renderPaymentList({ item }) {
    return (
      <PaymentItem item={item} />
    )
  }

  return (
    <FlatList
      data={PaymentData}
      KeyExtractor={(item) => item.id}
      renderItem={renderPaymentList}
    />
  )
}

export default PaymentHistoryRender

const styles = StyleSheet.create({

})