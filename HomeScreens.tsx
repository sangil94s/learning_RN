import {View, Text} from 'react-native';
function HomeScreens({navigation}: any) {
  return (
    <View className="flex flex-col justify-center items-center bg-violet-200">
      <Text className="my-2 text-center text-emerald-600 font-bold">
        NativeWind 적용되나?
      </Text>
    </View>
  );
}
export default HomeScreens;
