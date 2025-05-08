// 삽질용 스크린

import {useQuery} from '@tanstack/react-query';
import {View, Text} from 'react-native';
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1',
      {
        timeout: 5000,
      },
    );

    return response.data;
  } catch (e) {
    const err = e as Error;
    console.error('❌ Error:', err.message);
    throw err;
  }
};

export default function Sap() {
  const {data, isLoading} = useQuery({
    queryKey: ['myData'],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,
  });
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View className="flex flex-col justify-center items-center bg-amber-400">
      <Text>삽질용 스크린 입니다.</Text>
      <Text className="py-2">텍스트 : {data?.name}</Text>
    </View>
  );
}
