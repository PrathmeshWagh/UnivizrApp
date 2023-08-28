import { View } from 'react-native'
import IconButton from './IconButton'

function StarIcon({ size, color }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <IconButton icon={'star'} size={size} color={color} />
    </View>
  )
}

export default StarIcon;