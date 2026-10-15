import { View, Text, TouchableOpacity } from 'react-native'

const ButtonHeading = ({ title} : ButtonHeadingProps ) => {
  return (
    <View className='list-head'>
      <TouchableOpacity className='list-action'>
        <Text className='list-action-text'>Upload</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonHeading