import {View, Button, Text, FlatList} from 'react-native';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import {useState, useEffect} from 'react';

function HomeScreens({navigation}: any) {
  const isFocused = useIsFocused();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchUsers();
    }
  }, [isFocused]);
  if (loading) return <Text>로딩중...</Text>;
  if (error) return <Text>에러 발생: {error.message}</Text>;
  if (!data || !Array.isArray(data)) {
    return <Text>데이터를 불러오지 못했거나 형식이 올바르지 않습니다.</Text>;
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Go to Detail"
          onPress={() => {
            navigation.navigate('Detail');
          }}
        />
      </View>
    </View>
  );
}
export default HomeScreens;
