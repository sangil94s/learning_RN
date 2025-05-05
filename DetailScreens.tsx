import {View, Button} from 'react-native';


function DetailScreens ({navigation}) {

    return (
        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home'); 
        }}
      />
    </View>
        
    )
}
export default DetailScreens