import {View, Button} from 'react-native';
function HomeScreens ({navigation}) {

    return (
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('Detail'); 
        }}
      />
    </View>
        
    )
}
export default HomeScreens