import { Text, View, StyleSheet } from "react-native";
import PaymentHistoryRender from "../components/PaymentComponents/PaymentHistoryRender";

function PaymentScreen() {
  return (
    <View styles={styles.container}>
      <PaymentHistoryRender />
    </View>
  )
}

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  }
})