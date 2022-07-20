import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {RootStackParamList} from '../../navigation';
import {usePosts} from '../../hooks/usePosts';
import PostItem from './components/PostItem';
import {Post} from '../../types';
import {styles} from './styles';

type FeedScreenRouteProp = NativeStackScreenProps<RootStackParamList, 'Feed'>;

const FeedScreen: React.FC<FeedScreenRouteProp> = ({navigation}) => {
  const {data, isLoading} = usePosts();
  const insets = useSafeAreaInsets();

  const onItemPress = useCallback(
    (item: Post) => {
      navigation.navigate('Post', {data: item});
    },
    [navigation],
  );

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      contentContainerStyle={[
        styles.contentContainer,
        {
          paddingBottom: Math.max(
            insets.bottom,
            styles.contentContainer.paddingVertical,
          ),
        },
      ]}
      showsVerticalScrollIndicator={false}
      data={data}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      renderItem={({item}) => (
        <PostItem data={item} key={item.id} onPress={() => onItemPress(item)} />
      )}
    />
  );
};

export default FeedScreen;
