import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

/* React-Router-Dom 과 유사하게 사용 - 필요한 컴포넌트가 올라와서 이동 되도록 */
import HomeScreens from './HomeScreens';
import Sap from './src/screens/Sap';

// initialRouteName : 최초로 보는 컴포넌트
// name : Route 명칭 = 예시 : react-router-dom에서 /admin, /mypage 같은 역할
import Footer from './src/components/Footer';

const Stack = createStackNavigator();
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="BottomNav"
            component={Footer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
