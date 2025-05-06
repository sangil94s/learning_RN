import {View, Button, Text} from 'react-native';
function HomeScreens({navigation}: any) {
  return (
    <View className="flex flex-col justify-center items-center bg-violet-500">
      <Text className="my-2 text-center text-emerald-600 font-bold">
        NativeWind 적용되나?
      </Text>


      <Button title="삽질용 스크린 이동" onPress={() => navigation.navigate("Sap")} />

      
    </View>
  );
}
export default HomeScreens;
