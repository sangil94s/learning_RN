import {View, Button, Text, FlatList} from 'react-native';

function HomeScreens({navigation}: any) {
  return (
    <View className="flex flex-col justify-center items-center bg-violet-500">
      <Text>NativeWind 적용되나?</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
}
export default HomeScreens;
