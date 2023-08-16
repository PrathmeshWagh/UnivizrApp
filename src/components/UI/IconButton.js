import { View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function IconButton({ icon, color, size, onPress, style }) {
  return (
    <View>
      <MaterialCommunityIcons style={style} name={icon} color={color} size={size} onPress={onPress} />
    </View>
  )
}
export default IconButton;