import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FeedScreen from './screens/Feed';
import PostScreen from './screens/Post';
import {Post} from './types';

export type RootStackParamList = {
  Feed: undefined;
  Post: {data: Post};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={({route}) => ({title: route.params.data.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
