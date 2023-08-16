import { Button, Text } from "react-native";

function One({ navigation }) {
  return (
    <Button title="click" onPress={() => navigation.navigate('Try')} />

  )
}
export default One;